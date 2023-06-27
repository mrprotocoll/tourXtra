require 'swagger_helper'

RSpec.describe User, type: :request do
  include JsonWebToken
  let!(:user1) { create :user }
  let!(:access_token) { generate_token(user1) }
  let!(:Authorization) { access_token.to_s }

  # create user
  path '/users' do
    post('Create user') do
      tags 'Users'
      consumes 'application/json'
      produces 'application/json'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          email: { type: :string },
          password: { type: :string }
        },
        required: %w[name email password]
      }
      response '201', 'user created' do
        let(:user) { { name: 'test2', email: 'rails2@yopmail.com', password: 'backend12' } }

        run_test! do |response|
          data = JSON.parse(response.body)
          expect(data['data']['name']).to eq('test2')
          expect(data['data']['email']).to eq('rails2@yopmail.com')
          expect(data['token']).not_to be_nil
        end
      end
    end
  end

  # login user
  path '/login' do
    post('Authenticate user') do
      tags 'Users'
      consumes 'application/json'
      produces 'application/json'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          email: { type: :string },
          password: { type: :string }
        },
        required: %w[email password]
      }

      response '200', 'user authenticated' do
        # login credentials

        let(:user) { { email: user1.email, password: user1.password } }

        run_test! do |response|
          data = JSON.parse(response.body)
          expect(data['token']).not_to be_nil
        end
      end

      response '401', 'Unauthorized' do
        # login credentials
        let(:user) { { email: 'wrongemail', password: 'invalidpassord' } }

        run_test! do |response|
          JSON.parse(response.body)
          expect(response).to have_http_status(:unauthorized)
          expect(response.body).to include('error')
        end
      end
    end
  end

  # fetch user by id
  path '/users/{id}' do
    get('Get user by id') do
      produces 'application/json'
      tags 'Users'
      security [bearerAuth: []]
      parameter name: 'id', in: :path, type: :string, description: 'id'
      response(200, 'Successful') do
        let(:id) { user1.id }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end

        run_test! do |response|
          data = JSON.parse(response.body)
          expect(data['id']).to eq(user1['id'])
        end
      end

      response(401, 'Unauthorized') do
        let(:id) { user1.id }
        let!(:Authorization) { 'access_token.to_s' }
        run_test!
      end
    end
  end
end
