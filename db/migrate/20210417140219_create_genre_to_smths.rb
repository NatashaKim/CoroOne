class CreateGenreToSmths < ActiveRecord::Migration[6.0]
  def change
    create_table :genre_to_smths do |t|
      t.belongs_to :genre, null: false, foreign_key: true
      t.belongs_to :post, null: true, foreign_key: true
      t.belongs_to :project, null: true, foreign_key: true

      t.timestamps
    end
  end
end
