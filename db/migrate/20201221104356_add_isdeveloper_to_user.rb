class AddIsdeveloperToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :isdeveloper, :boolean, :default => false
  end
end
