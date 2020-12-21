class AddIsmoderatorToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :ismoderator, :boolean, :default => false
  end
end
