class User < ApplicationRecord
  has_secure_password
  has_many :reservations, dependent: :destroy
  has_many :tours

  validates :name, presence: true, length: { minimum: 3, maximum: 50 }
  validates :email, presence: true, uniqueness: true
  # validates :password, presence: true, length: { minimum: 6 }
end
