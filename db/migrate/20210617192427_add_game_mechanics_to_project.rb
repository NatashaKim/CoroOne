class AddGameMechanicsToProject < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :game_mechanics, :boolean, :default => false
  end
end
