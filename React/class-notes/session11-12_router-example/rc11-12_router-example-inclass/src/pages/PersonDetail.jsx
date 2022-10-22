import { useParams, useLocation, useNavigate } from "react-router-dom";

const PersonDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const { state: person } = useLocation();
  console.log(person);
  return (
    <div className="container text-center">
      <h3>
        {person.first_name} {person.last_name}
      </h3>
      <img className="rounded" src={person.avatar} alt="" />
      <p>{person.email}</p>
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">
          Go Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PersonDetail;
