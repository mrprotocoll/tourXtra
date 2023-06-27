import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen p-2">
      <h1 className="sm:text-3xl text-2xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 text-center">
        Sorry the page you are looking for does not exist
      </p>
      <button type="button" onClick={() => navigate(-1)} className="text-primary outline_btn">Go Back</button>
    </div>
  );
};

export default PageNotFound;
