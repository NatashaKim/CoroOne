class AddIdeaOrConceptToProject < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :idea_or_concept, :boolean, :default => false
  end
end
