import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-2xl">Page Not Found</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default PageNotFound;
