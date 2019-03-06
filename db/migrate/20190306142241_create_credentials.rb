class CreateCredentials < ActiveRecord::Migration[5.2]
  def change
    create_table :credentials do |t|
      t.integer user_id, null: false
      t.text about_me
      t.text education
      t.text skills
      t.text looking_for

      t.timestamps
    end
    add_index :credentials, :user_id
  end
end
