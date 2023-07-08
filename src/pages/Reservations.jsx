import Loader from 'components/Loader/Loader';
import ReservationCard from 'components/reservation/ReservationCard';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from 'redux/reservation/reservationsSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, []);

  return loading
    ? <Loader />
    : (
      <div className="flex justify-center flex-col items-center p-4">
        <h2 className="sm:text-3xl text-2xl font-bold mb-6 pt-4">
          My Reservations
          {' '}
        </h2>
        <div className="flex flex-wrap flex-col sm:flex-row gap-4 justify-center items-center w-full">
          {data.length > 0
            ? (
              data.map((reservation) => <ReservationCard key={reservation.id} data={reservation} />)
            )
            : (
              <p className="text-lg font-bold text-gray-800 text-center">
                You have no reservations yet.
              </p>
            )}
        </div>
      </div>
    );
};

export default Reservations;
