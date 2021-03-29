class AddFeedbackToPost < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :feedback, :text
  end
end
