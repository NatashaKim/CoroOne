class AddProjectEndDateToPost < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :project_end_date, :date
  end
end
