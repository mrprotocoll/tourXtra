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
              <div
                key={info.id}
                className="flex md:flex-row md:w-full w-[310px]  flex-col items-center justify-between m-auto shadow-md rounded-lg mb-4 md:m-5 md:h-[150px] px-[10px]"
              >
                <div className="md:w-[30%] md:h-[150px] p-2">
                  <img
                    src={`http://localhost:3000${info.image_url}`}
                    alt={info.name}
                    className="w-full h-full"
                  />
                </div>
                <h2 className="mb-4 text-lg font-semibold text-slate-800">
                  {info.name}
                </h2>

                <div className="flex flex-col justify-center mb-[1rem]">
                  {info.status && <span className="bg-primary text-white py-1 px-3 rounded-3xl">Removed</span>}
                  {!info.status && (
                  <button
                    type="button"
                    className="bg-[red] text-[#fff] px-4 py-2 rounded-lg"
                    onClick={() => handleDelete(info.id)}
                  >
                    Delete
                  </button>
                  )}
                </div>
              </div>
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
