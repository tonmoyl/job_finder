class CreateCredentials < ActiveRecord::Migration[5.2]
  def change
    create_table :credentials do |t|
      t.integer :user_id, null: false
      t.text :about_me, null: false, default: ""
      t.text :education, null: false, default: ""
      t.text :skills, null: false, default: ""
      t.text :looking_for, null: false, default: ""

      t.timestamps
    end

    add_index :credentials, :user_id
  end
end
