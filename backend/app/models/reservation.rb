class Reservation < ApplicationRecord
  belongs_to :user, dependent: :destroy
  belongs_to :tour

  validates :tour_id, presence: true
  validates :user_id, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
end
