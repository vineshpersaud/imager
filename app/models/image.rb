class Image < ApplicationRecord
  has_attached_file :image ,styles:{large: "600x600>" , medium: "300x300>",thumb: "150x150#"},
                :path => ":rails_root/public/system/images/images/000/010/:id/:style/:basename.:extension"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  has_many :comments
  belongs_to :user, optional: true
end
