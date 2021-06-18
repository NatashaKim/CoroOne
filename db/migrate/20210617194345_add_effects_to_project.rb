class AddEffectsToProject < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :effects, :boolean, :default => false
  end
end
