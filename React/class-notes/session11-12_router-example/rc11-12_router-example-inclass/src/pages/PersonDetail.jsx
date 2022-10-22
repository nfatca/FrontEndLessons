import {
  useParams,
  useLocation,
  useNavigate,
  useState,
  useEffect,
} from "react-router-dom";

const PersonDetail = () => {
  const navigate = useNavigate();

  // const { id } = useParams();
  // console.log(id);

  // const { state: person } = useLocation();
  // console.log(person);

  const [person, setPerson] = useState("");

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  }, []);

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
