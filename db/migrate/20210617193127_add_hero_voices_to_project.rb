class AddHeroVoicesToProject < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :hero_voices, :boolean, :default => false
  end
end
