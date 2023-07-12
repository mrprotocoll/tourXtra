import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Nav from './Navbar/Nav';
import 'styles/global.css';

const Layout = () => (
  <div className="layout">
    <Nav />
    <div className="main">
      <Outlet />
    </div>
    <ToastContainer
      position="top-center"
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </div>
);

export default Layout;
