class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.date :project_start_date
      t.date :project_end_date
      t.text :download_project
      t.text :donate_project

      t.timestamps
    end
  end
end
