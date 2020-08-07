class Place < ApplicationRecord
  include Rails.application.routes.url_helpers
  belongs_to :country
  has_one_attached :image
  validates :name, presence: true
  validates :image, presence: true
  validates :description, presence: true, length: { maximum: 300 }


   def image_url
     url_for(self.image)
   end

end
