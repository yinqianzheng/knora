class CreateTopics < ActiveRecord::Migration[5.2]
  def change
    create_table :topics do |t|
      t.string :topic, null: false
      t.timestamps
    end

    add_index :topics, :topic, unique: true
  end
end
