class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :bpdy, null: false
      t.integer :author_id, null: false
      t.integer :answer_id, null: false
      t.timestamps
    end

    add_index :comments, :author_id, unique: true
    add_index :comments, :answer_id, unique: true
  end
end
