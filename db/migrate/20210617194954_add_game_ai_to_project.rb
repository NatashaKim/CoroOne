class AddGameAiToProject < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :game_ai, :boolean, :default => false
  end
end
