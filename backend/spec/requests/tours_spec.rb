require 'swagger_helper'

RSpec.describe 'Tours', type: :request do
  include JsonWebToken
  let!(:user1) { create :user }
  let!(:access_token) { generate_token(user1) }
  let!(:Authorization) { access_token.to_s }

  path '/tours' do
    get 'list tours' do
      tags 'Tours'
      produces 'application/json'
      let!(:tour) { create :tour }
      response '200', 'Successful' do
        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end

        run_test! do |response|
          response = JSON.parse(response.body)
          expect(response).to_not eq([])
        end
      end
    end
  end

  # create tour
  path '/tours' do
    post 'Create tour' do
      tags 'Tours'
      produces 'application/json'
      consumes 'application/json'
      security [bearerAuth: []]
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: { name: { type: :string }, city: { type: :string }, price: { type: :integer },
                      des: { type: :string }, video: { type: :string }, image: { type: :string, format: :binary } },
        required: %w[name city price des]
      }
      let(:params) do
        { name: 'Joyland', city: 'Lahore', price: 30, video: 'This is the video', des: 'Just a small place to fun',
          image: fixture_file_upload('dominos.png', 'image/png') }
      end
      response(201, 'successful') do
        after do |example|
          example.metadata[:response][:content] = { 'application/json' => {
            example: JSON.parse(response.body, symbolize_names: true)
          } }
        end
        run_test!
      end

      response(400, 'Bad Request') do
        let!(:params) { { name: 'name', city: 'Lagos' } }
        run_test!
      end
    end
  end

  # fetch all tours including removed tours
  path '/my-tours' do
    get 'list all tours created by user' do
      tags 'Tours'
      produces 'application/json'
      security [bearerAuth: []]
      let!(:tour) { create :tour }
      response '200', 'Successful' do
        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end

        run_test! do |response|
          response = JSON.parse(response.body)
          expect(response).to_not be_nil
        end
      end
    end
  end

  # fetch tour by id
  path '/tours/{id}' do
    get('Show tour') do
      produces 'application/json'
      tags 'Tours'
      parameter name: 'id', in: :path, type: :string, description: 'id'
      security [bearerAuth: []]
      let!(:tour) { create :tour }
      response(200, 'Successful') do
        let(:id) { tour.id }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end

        run_test! do |response|
          data = JSON.parse(response.body)
          expect(data['id']).to eq(tour['id'])
        end
      end

      response(401, 'Unauthorized') do
        let(:id) { tour.id }
        let!(:Authorization) { 'access_token.to_s' }
        run_test!
      end
    end
  end
end
