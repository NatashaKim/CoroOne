class AddLidToPost < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :lid, :text
  end
end
