require 'swagger_helper'

RSpec.describe 'Reservations', type: :request do
  include JsonWebToken
  let!(:user1) { create :user }
  let!(:tour) { create :tour }
  let!(:access_token) { generate_token(user1) }
  let!(:Authorization) { access_token.to_s }

  # get reservations
  path '/reservations' do
    get 'list reservations' do
      tags 'Reservations'
      produces 'application/json'
      security [bearerAuth: []]
      response '200', 'Successful' do
        let!(:reservation) { create :reservation }
        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end

        run_test! do |response|
          response = JSON.parse(response.body)
          expect(response).not_to be_nil
        end
      end

      response(401, 'Unauthorized') do
        let!(:Authorization) { 'access_token.to_s' }
        run_test!
      end
    end
  end

  path '/reservations' do
    post 'Create reservations' do
      tags 'Reservations'
      produces 'application/json'
      consumes 'application/json'
      security [bearerAuth: []]
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          reservation: { type: :object,
                         properties: { tour_id: { type: :integer }, start_date: { type: :string, format: 'date' },
                                       end_date: { type: :string, format: 'date' } } }
        },
        required: %w[start_date end_date tour_id]
      }

      response(201, 'successful') do
        let(:params) do
          { start_date: '16-01-2023', end_date: '16-01-2023', tour_id: tour.id }
        end

        after do |example|
          example.metadata[:response][:content] = { 'application/json' => {
            example: JSON.parse(response.body, symbolize_names: true)
          } }
        end
        run_test!
      end

      response(400, 'Bad Request') do
        let!(:params) { { start_date: 'name' } }
        run_test!
      end
    end
  end

  # fetch reservation by id
  path '/reservations/{id}' do
    get('Show reservation') do
      produces 'application/json'
      tags 'Reservations'
      parameter name: 'id', in: :path, type: :string, description: 'id'
      security [bearerAuth: []]
      let!(:reservation) { create :reservation }
      response(200, 'Successful') do
        let(:id) { reservation.id }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end

        run_test! do |response|
          data = JSON.parse(response.body)
          expect(data['id']).to eq(reservation['id'])
        end
      end

      response(401, 'Unauthorized') do
        let(:id) { reservation.id }
        let!(:Authorization) { 'access_token.to_s' }
        run_test!
      end
    end
  end
end
