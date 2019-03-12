class Image < ApplicationRecord
  has_one_attached :picture
  has_many :comments, -> { order('created_at DESC') }
  
  include Rails.application.routes.url_helpers
  scope :ordered_by_likes,-> {order(likes: :desc)}

  def url
     rails_blob_path(self.picture)
  end

end
