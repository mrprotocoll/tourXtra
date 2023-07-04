import PropTypes from 'prop-types';

const DeleteTourCard = ({ tour, handleDelete, handleRestore }) => (
  <div
    className="flex md:flex-row md:w-full w-[310px]  flex-col items-center justify-between m-auto shadow-md rounded-lg mb-4 md:m-5 md:h-[150px] px-[10px]"
  >
    <div className="md:w-[30%] md:h-[150px] p-2">
      <img
        src={process.env.REACT_APP_API_ROOT + tour.image_url}
        alt={tour.name}
        className="w-full h-full"
      />
    </div>
    <h2 className="mb-4 text-lg font-semibold text-slate-800">
      {tour.name}
    </h2>

    <div className="flex flex-col justify-center mb-[1rem]">
      {tour.status
      && (
        <>
          <button
            type="button"
            className="bg-black mb-3 text-[#fff] px-4 py-2 rounded-3xl"
            onClick={() => handleRestore(tour.id)}
          >
            Restore
          </button>
          <span className="bg-primary text-white py-1 px-3 rounded-3xl">Removed</span>
        </>

      )}

      {!tour.status && (
      <button
        type="button"
        className="bg-[red] text-[#fff] px-4 py-2 rounded-3xl"
        onClick={() => handleDelete(tour.id)}
      >
        Delete
      </button>
      )}
    </div>
  </div>
);

DeleteTourCard.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleRestore: PropTypes.func.isRequired,
};

export default DeleteTourCard;
