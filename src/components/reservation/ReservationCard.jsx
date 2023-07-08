import ReservationCardItem from './ReservationCardItem';

const ReservationCard = ({ data }) => {
  const cancelReservation = (start) => {
    const today = new Date();
    const startDate = new Date(start);
    return (today < startDate) ? (
      <button
        type="button"
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-full mt-2"
        onClick={() => null}
      >
        Cancel Reservation
      </button>
    ) : '';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <ReservationCardItem name="Tour" value={data.tour.name} />
          <ReservationCardItem name="City" value={data.tour.city} />
          <ReservationCardItem name="Start Date" value={data.start_date} />
          <ReservationCardItem name="End Date" value={data.end_date} />
        </div>
        <div className="flex justify-end">
          {cancelReservation(data.start_date)}
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
