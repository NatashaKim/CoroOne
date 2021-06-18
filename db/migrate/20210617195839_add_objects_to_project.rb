class AddObjectsToProject < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :objects, :boolean, :default => false
  end
end
