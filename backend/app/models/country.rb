class Country < ApplicationRecord
  include Rails.application.routes.url_helpers
  has_many :places
  has_one_attached :image
  validates :name, presence: true
  validates :image, presence: true


   def image_url
     url_for(self.image)
   end

end
