// eslint-disable-next-line import/no-extraneous-dependencies
import TourSlider from 'components/tour/TourSlider';
import React, { useState, useEffect } from 'react';
import { USERKEY, getUser } from 'util/auth';

// eslint-disable-next-line consistent-return
const Home = () => {
  const [user, setUser] = useState(getUser);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem(USERKEY)) ?? null);
  }, [setUser]);

  return (
    <section className="h-screen flex flex-col bg-gray-200">
      <div className="w-full h-[5rem] bg-gray-100 flex justify-between items-center">
        {user === null ? <h4 className="ml-12 font-bold text-lg">Welcome</h4>
          : (
            <h4 className="get_username md:ml-12 font-bold text-lg">
              Hello,
              {user.name}
            </h4>
          )}
      </div>
      <div className="flex flex-col md:justify-evenly justify-around h-full">
        <div className="flex flex-col align-middle text-center">
          <h2 className="text-2xl font-extrabold">LATEST PLACE</h2>
          <h5 className="text-base md:text-xl text-bGrey">Please Select where you want to visit</h5>
        </div>

        <TourSlider />

      </div>
    </section>
  );
};

export default Home;
