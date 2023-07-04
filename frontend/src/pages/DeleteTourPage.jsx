import DeleteTourCard from 'components/tour/DeleteTourCard';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchToursAll, deleteTour } from 'redux/tours/tours';
// import { getUser } from 'util/auth';

const DeleteTourPage = () => {
  const tourList = useSelector((state) => state.tours);
  const { myTours } = tourList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToursAll());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteTour(id));
    }
  };

  return (
    <>
      <div className="w-[70%] m-auto">
        <h1
          className="
            text-3xl mb-4 text-center mt-[45px]
            "
        >
          My Tour List
        </h1>
        <div className="flex flex-row flex-wrap gap-5 md:flex-nowrap md:gap-0 md:flex-col w-full mb-12">

          { myTours.length > 0
            ? myTours.map((info) => (
              <DeleteTourCard key={info.id} tour={info} handleDelete={handleDelete} />
            ))
            : (
              <p className="text-lg font-bold text-gray-800 text-center">
                You have no tours created yet.
                {' '}
                <Link to="/add-tour" className="text-primary">Add a tour</Link>
              </p>
            )}
        </div>
      </div>
    </>
  );
};

export default DeleteTourPage;
