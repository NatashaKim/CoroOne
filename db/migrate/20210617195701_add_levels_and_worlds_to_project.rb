class AddLevelsAndWorldsToProject < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :levels_and_worlds, :boolean, :default => false
  end
end
