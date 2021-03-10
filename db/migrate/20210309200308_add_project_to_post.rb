class AddProjectToPost < ActiveRecord::Migration[6.0]
  def change
    add_reference :posts, :project, null: true, foreign_key: true
  end
end
