class AddPlotAndCharactersToProject < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :plot_and_characters, :boolean, :default => false
  end
end
