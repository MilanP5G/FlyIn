class Place < ApplicationRecord
  include Rails.application.routes.url_helpers
  belongs_to :country
  has_one_attached :image


   def image_url
     url_for(self.image)
   end

end
