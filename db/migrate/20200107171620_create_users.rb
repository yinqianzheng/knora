class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.text :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.text :imageUrl
      t.timestamps
    end

    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
  end
end
