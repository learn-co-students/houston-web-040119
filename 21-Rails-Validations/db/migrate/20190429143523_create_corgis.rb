class CreateCorgis < ActiveRecord::Migration[5.0]
  def change
    create_table :corgis do |t|
      t.string :name
      t.integer :age

      t.timestamps
    end
  end
end
