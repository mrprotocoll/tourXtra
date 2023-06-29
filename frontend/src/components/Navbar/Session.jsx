import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { destroySession, TOKENKEY } from 'util/auth';

const Session = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    
    const handleLogout = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
        destroySession();
        navigate('/login');
    };

  useEffect(() => {
    if (localStorage.getItem(TOKENKEY)) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn, handleLogout]);

    return (
        <>
            {
                isLoggedIn ? (
                    <li className="pl-4 py-2 hover:bg-primary hover:text-white ">
                        <button type="button" onClick={handleLogout}>LOGOUT</button>
                    </li>
                ) : (
                    <li className="pl-4 py-2 hover:bg-primary hover:text-white sm:text-lg">
                        <NavLink to="/login">LOGIN</NavLink>
                    </li>
                )
            }
        </>
    )
}

export default Session;