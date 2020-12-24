class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.text :option
      t.boolean :correctness
      t.references :post, null: true, foreign_key: true

      t.timestamps
    end
  end
end
