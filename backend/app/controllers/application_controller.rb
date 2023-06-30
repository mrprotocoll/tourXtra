class ApplicationController < ActionController::API
  include JsonWebToken

  before_action :authenticate_user!

  def user_id
    token = request.headers['Authorization']&.split(' ')&.last
    decode = decoded_token(token)
    decode.first['user_id']
  end

  def current_user
    User.find_by(id: user_id)
  end

  def logged_in?
    !!current_user
  end

  def authenticate_user!
    render json: { error: 'Please log in' }, status: :unauthorized unless logged_in?
  end
end
