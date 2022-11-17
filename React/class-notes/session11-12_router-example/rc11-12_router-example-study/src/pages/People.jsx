import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  const getPeople = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className="container text-center mt-4">
      <h1>PEOPLE LIST</h1>
      <div className="row justify-content-center g-3">
        {people?.map((person) => {
          const { id, first_name, last_name, avatar } = person;
          return (
            <div
              key={id}
              className=" col-sm-12 col-md-6 col-lg-4"
              type="button"
              //! absolute path
              // onClick={() => navigate(`/people/${id}`, { state: person })}
              //! realative path
              // onClick={() => navigate(`${id}`, { state: person })}
              onClick={() => navigate(`${id}`)}
              // onClick={() => <Link to={`/people/${id}`}>Click<Link/>}
            >
              <img className="rounded" src={avatar} alt="img" />
              <h6>
                {first_name} {last_name}
              </h6>
              {/* <Link to={`/people/${id}`}> Click </Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
