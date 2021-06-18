class AddBackgroundMusicToProject < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :background_music, :boolean, :default => false
  end
end
