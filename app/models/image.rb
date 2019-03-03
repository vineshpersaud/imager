class Image < ApplicationRecord
  has_one_attached :picture
  has_many :comments
  belongs_to :user, optional: true
  include Rails.application.routes.url_helpers

  def url
     rails_blob_path(self.picture)
  end

end
