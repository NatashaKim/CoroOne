class AddEngineToProject < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :engine, :boolean, :default => false
  end
end
