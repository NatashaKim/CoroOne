class AddImagesrcToCategory < ActiveRecord::Migration[6.0]
  def change
    add_column :categories, :imagesrc, :string
  end
end
