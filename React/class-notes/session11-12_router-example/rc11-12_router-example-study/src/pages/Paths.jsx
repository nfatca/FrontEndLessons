import { Link, useNavigate, Outlet } from "react-router-dom";

const Paths = () => {
  const navigate = useNavigate();
  return (
    <div className="container mt-4">
      <h1>
        Online IT Courses to Become a Qualified IT Professional with Clarusway
      </h1>

      <p className="fs-5">
        Join outstanding companies with rewarding salaries. We offer the
        highest-demand IT skills YOU need for success! CHOOSE THE BEST COURSE
        FOR YOU Upgrade your career with the best online training led by top IT
        experts!
      </p>
      <div>
        <Link className="btn btn-success w-50" to="">
          {/* <Link className="btn btn-success w-50" to="fullstack"> */}
          Fullstack
        </Link>
        <button
          className="btn btn-warning w-50"
          onClick={() => navigate("aws")}
        >
          Aws-Devops
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Paths;
