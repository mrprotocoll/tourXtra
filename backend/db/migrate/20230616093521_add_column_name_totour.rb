class AddColumnNameTotour < ActiveRecord::Migration[7.0]
  def change
    add_column :tours, :des, :string, limit: 100 
  end
end
