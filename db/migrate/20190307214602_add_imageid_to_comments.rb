class AddImageidToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :image_id, :integer
  end
end
