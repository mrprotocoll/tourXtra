import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';
import { TOKENKEY } from 'util/auth';
import RequireLogin from 'pages/RequireLogin';

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    if (!localStorage.getItem(TOKENKEY) || localStorage.getItem(TOKENKEY) === undefined) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => checkUserToken(), []);

  return (
    <>
      {
        isLoggedIn ? children : <RequireLogin />
      }
    </>
  );
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
