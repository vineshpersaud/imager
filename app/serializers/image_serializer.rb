class ImageSerializer < ActiveModel::Serializer
  has_many :comments
  attributes :title,:description,:url,:id
end
