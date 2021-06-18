class AddCharactersToProject < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :characters, :boolean, :default => false
  end
end
