import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NotFound from "./NotFound";

const PersonDetail = () => {
  const { id } = useParams();
  //   console.log(id);
  // const { state: person } = useLocation();
  //   console.log(person);
  const [person, setPerson] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setLoading(true);
        if (!res.ok) {
          setError(true);
          setLoading(false);
          throw new Error("Something went wrong");
        }

        return res.json();
      })
      .then((data) => {
        setPerson(data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (error) {
    return <NotFound />;
  } else if (loading) {
    return (
      <div>
        <h3>Data Loading</h3>
      </div>
    );
  }
  if (!error && !loading) {
    return (
      <div className="container text-center">
        <h3>
          {person?.first_name} {person?.last_name}
        </h3>
        <img src={person?.avatar} className="rounded" alt="" />
        <p>{person?.email}</p>
        <div>
          <button
            className="btn btn-success me-2"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button className="btn btn-warning" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    );
  }
};

export default PersonDetail;
