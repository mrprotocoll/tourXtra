class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[create login]

  def index
    render json: User.all
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: { data: UserSerializer.new(user), message: 'Registration successful', token: generate_token(user) },
             status: :created, location: @user
    elsif user.errors.messages
      render json: { error: user.errors.messages }
    else
      render json: { error: 'User could not be created. Try again' }
    end
  end

  def show
    user = User.find(params[:id])
    if user
      render json: user
    else
      render json: { error: 'User could not be found.' }
    end
  end

  def me
    if logged_in?
      render json: current_user
    else
      render json: { error: 'User is not logged in/could not be found.' }
    end
  end

  def login
    user = User.find_by_email(session_params[:email])

    if user.present? && user.authenticate(session_params[:password])
      render json: { user: UserSerializer.new(user), message: 'Logged in successfully', token: generate_token(user) }
    else
      render json: { error: 'Incorrect username or password.' }, status: :unauthorized
    end
  end

  private

  def user_params
    params.permit(:name, :email, :password)
  end

  def session_params
    params.permit(:email, :password)
  end
end
