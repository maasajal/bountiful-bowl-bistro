import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center my-20 mx-auto">
      <h1 className="text-5xl font-Cinzel font-bold text-red-700">
        404 - Page not found!
      </h1>
      <hr />
      <Link to="/">Back to Home</Link>
      <hr />
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};
export default ErrorPage;
