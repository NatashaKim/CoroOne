class CreatePostsTags < ActiveRecord::Migration[6.0]
  def change
    create_table :posts_tags, :id => false do |t|
      t.references :post, null: true, foreign_key: true
      t.references :tag, null: true, foreign_key: true
    end
  end
end
