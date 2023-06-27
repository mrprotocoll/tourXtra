require 'rails_helper'

RSpec.describe Reservation, type: :model do
  before(:each) do
    @user = User.create(name: 'Test user', email: 'rails@gmail.com',
                        password_digest: '123456')
    @tour = Tour.create(name: 'Obudu tour', city: 'Ibom', price: 245.00, video: 'Do it now or die regretting',
                        user_id: @user.id)
    @reservation = Reservation.create(start_date: '12-02-2023', end_date: '12-08-2023', user_id: @user.id,
                                      tour_id: @tour.id)
  end
  let!(:reservation) { create :reservation }
  it 'is valid with valid attributes' do
    expect(reservation).to be_valid
  end
  it 'is not valid without a start date' do
    @reservation.start_date = nil
    expect(@reservation).to_not be_valid
  end
  it 'is not valid without an end date' do
    @reservation.end_date = nil
    expect(@reservation).to_not be_valid
  end
  it 'is not valid without an tour_id' do
    @reservation.tour_id = nil
    expect(@reservation).to_not be_valid
  end
  it 'is not valid without a user_id' do
    @reservation.user_id = nil
    expect(@reservation).to_not be_valid
  end
end
