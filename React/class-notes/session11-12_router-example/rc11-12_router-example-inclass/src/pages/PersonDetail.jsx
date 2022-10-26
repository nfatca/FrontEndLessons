import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const PersonDetail = () => {
  const navigate = useNavigate();

  //! Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  const { id } = useParams();
  // console.log(id);

  //! navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
  //! Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz
  // const { state: person } = useLocation();
  // console.log(person);

  const [person, setPerson] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  }, []);
  if (error) {
    return <NotFound />;
  } else {
    return (
      <div className="container text-center">
        <h3>
          {person.first_name} {person.last_name}
        </h3>
        <img className="rounded" src={person.avatar} alt="" />
        <p>{person.email}</p>
        <div>
          <button
            onClick={() => navigate("/")}
            className="btn btn-success me-2"
          >
            Go Home
          </button>
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            Go Back
          </button>
        </div>
      </div>
    );
  }
};

export default PersonDetail;
