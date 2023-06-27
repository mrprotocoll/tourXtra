class RenameStartEndInReservation < ActiveRecord::Migration[7.0]
  def change
    rename_column :reservations, :start_end, :start_date
  end
end
