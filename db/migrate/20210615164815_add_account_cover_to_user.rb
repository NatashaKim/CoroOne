class AddAccountCoverToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :account_cover, :string
  end
end
