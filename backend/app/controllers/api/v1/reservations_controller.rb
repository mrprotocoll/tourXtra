class Api::V1::ReservationsController < ApplicationController
  def index
    user = current_user
    @reservations = Reservation.includes(:tour).where(user_id: user.id).order(created_at: :desc)
    render json: @reservations.to_json(include: :tour)
  end

  def show
    @reservation = Reservation.find_by(id: params[:id])
    render json: @reservation.to_json(include: :tour)
  end

  def create
    @reservation = current_user.reservations.new(reservation_params)
    if @reservation.save
      render json: @reservation.to_json(include: :tour), status: :created, notice: 'Reservation created successfully'
    else
      render json: { error: 'Unable to create reservation' }, status: :bad_request
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:start_date, :end_date, :tour_id)
  end
end
