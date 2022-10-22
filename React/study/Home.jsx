import { useState } from "react";

const Home = () => {
  const [item, setItem] = useState({
    name: "",
    surname: "",
    email: "",
  });
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form action="">
        <div>
          <h2>Name : {item.name} </h2>
          <input
            type="text"
            value={item.name}
            name="name"
            onChange={(e) => setItem({ ...item, name: e.target.value })}
          />
        </div>
        <div>
          <h2>Surname : {item.surname}</h2>
          <input
            type="text"
            value={item.surname}
            surname="surname"
            onChange={(e) => setItem({ ...item, surname: e.target.value })}
          />
        </div>
        <div>
          <h2>e-mail : {item.email} </h2>
          <input
            type="mail"
            value={item.email}
            email="email"
            onChange={(e) => setItem({ ...item, email: e.target.value })}
          />
        </div>
        <div>
          <button onClick={submit}>Submit</button>
        </div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </form>
    </div>
  );
};

export default Home;
