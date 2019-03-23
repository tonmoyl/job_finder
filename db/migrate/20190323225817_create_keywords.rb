class CreateKeywords < ActiveRecord::Migration[5.2]
  def change
    create_table :keywords do |t|
      t.string, null: false

      t.timestamps
    end
    add_index :keywords, unique: true
  end
end
