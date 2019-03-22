class CreateSubmits < ActiveRecord::Migration[5.2]
  def change
    create_table :submits do |t|
      t.integer :user_id, null: false
      t.integer :posting_id, null: false

      t.timestamps
    end
    add_index(:submits, [:user_id, :posting_id])
  end
end
