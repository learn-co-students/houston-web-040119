class CreateFriendships < ActiveRecord::Migration[5.0]
  def change
    create_table :friendships do |t|
      t.integer :owner_id
      t.integer :corgi_id

      t.timestamps
    end
  end
end
