class AddReleaseDateToPost < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :release_date, :date
  end
end
