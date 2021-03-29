class AddProjectStartDateToPost < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :project_start_date, :date
  end
end
