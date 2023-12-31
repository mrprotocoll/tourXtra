import { NavLink } from 'react-router-dom';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TourSlider = ({ tours }) => {
  const [cardsPerPage, setCardsPerPage] = useState(window.innerWidth < 768 ? 1 : 3);
  const totalPages = Math.ceil(tours.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const sliceParagraph = (paragraph, limit) => {
    const words = paragraph.split(' ');
    const slicedWords = words.slice(0, limit);
    const slicedParagraph = slicedWords.join(' ');
    return slicedParagraph;
  };

  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(window.innerWidth < 768 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className=" w-full flex items-center justify-between flex-col md:flex-row">
        {currentPage > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="button-pre py-3 px-4 bg-primary text-white hover:bg-lime-400 font-bold hidden md:block"
          >
            <span><BiLeftArrow /></span>
          </button>
        )}
        <div className="flex items-center justify-evenly w-full md:flex-row flex-col">
          {tours.length === 0 ? <h3>There is no tour kindly add</h3>
            : tours.slice(startIndex, endIndex).map((item) => (
              <div key={item.id} id={item.id} className="card-main shadow-md hover:scale-105 transition-transform duration-300">
                <NavLink to={`/tour/${item.id}`}>
                  <img src={`http://localhost:3000${item.image_url}`} alt={item.name} />
                  <div className="leading-4 p-3">
                    <h3 className="font-bold text-xl space-y-3 ">{item.name}</h3>
                    <p className="Des  py-2 text-gray-500 leading-snug">{sliceParagraph(item.des, 10)}</p>
                    <p className="text-base text-center font-[18px]">
                      From:
                      {' '}
                      <span className="font-bold">
                        {' '}
                        $
                        {item.price}
                      </span>
                    </p>
                  </div>
                </NavLink>
              </div>
            ))}

        </div>
        {currentPage < totalPages && (
          <button
            type="button"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="bg-primary text-white font-bold py-3 px-4 button-next hidden md:block"
          >
            <span className="text-xl"><BiRightArrow /></span>
          </button>
        )}
      </div>

      <div className="flex flex-row-reverse md:hidden bg-background">
        {currentPage > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="font-bold text-primary  px-4"
          >
            <span>Prev</span>
          </button>
        )}
        {currentPage < totalPages && (
          <button
            type="button"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="font-bold text-primary"
          >
            <span className="pr-5">Next</span>
          </button>
        )}
      </div>
    </>

  );
};
TourSlider.propTypes = {
  tours: PropTypes.array.isRequired,
};
export default TourSlider;
