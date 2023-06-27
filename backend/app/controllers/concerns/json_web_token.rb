require 'jwt'

module JsonWebToken
  extend ActiveSupport::Concern

  def jwt_key
    Rails.application.credentials.jwt_key
  end

  def generate_token(user)
    JWT.encode({ user_id: user.id }, jwt_key, 'HS256')
  end

  def decoded_token(token)
    JWT.decode(token, jwt_key, true, { algorithm: 'HS256' })
  rescue JWT::DecodeError
    [{ error: 'Invalid Token' }]
  end
end
