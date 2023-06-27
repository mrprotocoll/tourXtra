import { PropTypes } from 'prop-types';

const ReservationCardItem = ({ name, value }) => (
  <div className="flex justify-between items-center mb-2">
    <span className="text-gray-700 font-bold">
      {name}
      :
    </span>
    <span className="text-gray-700">
      {value}
    </span>
  </div>
);

ReservationCardItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ReservationCardItem;
