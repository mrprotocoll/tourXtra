import ReservationForm from 'components/reservation/ReservationForm';
import { useParams } from 'react-router-dom';

const AddReservation = () => {
  const { tourId } = useParams();

  return (
    <div className="flex flex-col justify-center items-center bg-primary" id="reservation-page">
      <h1 className="text-4xl font-bold mb-2 text-gray-100 ">
        BOOK A TOUR
      </h1>
      <p className="text-lg  mb-10 p-2 text-gray-100">
        Please use the form below to book a reservation for the tour.
      </p>

      <div className="mt-3">
        <ReservationForm tourId={tourId} />
      </div>
    </div>
  );
};

export default AddReservation;
