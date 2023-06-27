class Api::V1::ToursController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index]

  def index
    tours = Tour.with_attached_image.where(status: false).order(created_at: :desc)
    render json: tours, methods: :image_url
  end

  def index_all
    tours = current_user.tours.with_attached_image.all.order(created_at: :desc)
    render json: tours, methods: :image_url
  end

  def create
    @user = current_user
    @tour = Tour.new(tour_params)
    @tour.user_id = @user.id
    if @tour.save
      render json: @tour, status: :created, notice: 'Tour created successfully'
    else
      render json: { error: 'Could not create Tour' }, status: :bad_request
    end
  end

  def show
    tour = Tour.find(params[:id])
    if tour
      render json: tour
    else
      render json: { error: 'Tour could not be found.' }, status: :bad_request
    end
  end

  def update
    @user = current_user
    @tour = Tour.find(params[:id])
    @tour.user_id = @user.id
    if @tour.update(tour_params)
      render json: @tour, notice: 'Tour updated successfully'
    else
      render json: { error: 'Something went wrong, Could not update Tour successfully' }, status: :bad_request
    end
  end

  private

  def tour_params
    params.permit(:name, :city, :price, :video, :image, :des, :status)
  end
end
