class CreateSubscribers < ActiveRecord::Migration[5.2]
  def change
    create_table :subscribers do |t|
      t.integer :user_id, null: false
      t.integer :subscriber_id, null: false
      t.timestamps
    end

    add_index :subscribers, [:user_id, :subscriber_id], unique: true
    add_index :subscribers, :subscriber_id
  end
end
