class AddVideourlToPost < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :videourl, :string
  end
end
