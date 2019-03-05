class CreatePosting < ActiveRecord::Migration[5.2]
  def change
    create_table :postings do |t|
      t.text :company, null: false
      t.text :role, null: false
      t.string :logo_url
      t.string :address
      t.string :link_url
      t.string :description

      t.timestamps
    end
  end
end
