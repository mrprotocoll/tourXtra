/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { SlSettings } from 'react-icons/sl';
import Loader from 'components/Loader/Loader';
import { fetchTours } from 'redux/tours/tours';

const TourDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tourDetails = useSelector((state) => state.tours);
  const { loading, data } = tourDetails;
  const tourss = data?.find((t) => t.id === parseInt(id, 10));

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      {tourss && (
        <div className="flex flex-col items-center md:justify-start justify-center w-full md:flex-row grow h-full lg:pt-20 lg:pb-10">
          <div className="grow flex items-center justify-center w-full">
            <div
              className="fixed text-[1.8rem] bottom-0
                            md:bottom-[2rem] md:left-[20rem] z-10 bg-primary text-white
                            rounded-full p-3 cursor-pointer
                            md:block
                            "
              onClick={() => navigate(-1)}
            >
              <BiLeftArrow />
            </div>
            <img
              src={process.env.REACT_APP_API_ROOT + tourss?.image_url}
              alt={decodeURIComponent(tourss?.name)}
              className="block m-4 aspect-square md:ml-[40%] w-full"
            />
          </div>
          <div className="flex flex-col w-full items-start md:items-end  md:mr-10 py-10 px-10 lg:px-0 text-center">
            <div className="flex flex-col  items-center md:items-end">
              <h1 className="md:text-right mb-4 text-3xl font-semibold text-slate-800">
                {decodeURIComponent(tourss?.name)}
              </h1>
              <h3 className="md:text-right mb-4 text-lg font-semibold text-slate-800">
                {decodeURIComponent(tourss?.city)}
              </h3>
              <p className=" mb-10  md:text-right text-gray-500 text-sm xl:w-1/2 lg:w-1/2">
                {decodeURIComponent(tourss?.des)}
              </p>
            </div>
            <div className="flex flex-col grow md:items-end ">
              <div className="grow flex flex-col rounded-2xl overflow-hidden border">
                <div className="flex justify-center items-center gap-4 border-b">
                  <h3 className="font-bold my-4">Other Details</h3>
                </div>
                <ul className="grow-0 p-4">
                  <li className="odd:bg-gray-200 bg-gray-100 py-2 px-4">
                    <div className="flex items-center justify-center">
                      <span className="pr-10">Price</span>
                      <span className="text-right">
                        $
                        {tourss?.price}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <h5 className="font-bold mt-1 mb-3">
                EXPLORE TOUR EVENT PLACE
              </h5>
              <iframe
                width="300"
                height="200"
                src={`${tourss.video}`}
                title={decodeURIComponent(tourss?.name)}
                allow="autoplay"
                allowfullscreen
              />
              <div className="my-6 flex justify-center">
                <NavLink
                  to={`/add-reservation/${id}`}
                  className="bg-primary text-white hover:bg-lime-400 px-6 py-2 rounded-full font-semibold min-w-[10rem] transition-colors border-2 border-transparent mb-4"
                >
                  <div className="flex items-center gap-3 justify-center">
                    <SlSettings />
                    <span>Reserve</span>
                    <BiRightArrow />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TourDetailsPage;
