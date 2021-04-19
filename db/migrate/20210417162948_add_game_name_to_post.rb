class AddGameNameToPost < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :game_name, :string
  end
end
