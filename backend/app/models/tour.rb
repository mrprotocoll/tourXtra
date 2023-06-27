class Tour < ApplicationRecord
  has_one_attached :image
  scope :with_attached_image, -> { includes(image_attachment: :blob) }

  def image_url
    return unless image.attached?

    Rails.application.routes.url_helpers.rails_blob_url(image, only_path: true)
  end

  belongs_to :user

  has_many :reservations, dependent: :destroy
  has_many :users

  validates :name, presence: true, uniqueness: true
  validates :city, presence: true
  validates :price, presence: true, numericality: { greater_than: 0 }
  validates :des, presence: true
end
