class AddPostTypeToCategory < ActiveRecord::Migration[6.0]
  def change
    add_reference :categories, :post_type, null: true, foreign_key: true
  end
end
