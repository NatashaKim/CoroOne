class AddThreeDAndAnimationToProject < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :three_d_and_animation, :boolean, :default => false
  end
end
