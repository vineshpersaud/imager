class SetImageDefaultLikes < ActiveRecord::Migration[5.2]
  def change
     change_column :images, :likes, :integer, default: 0
  end
end
