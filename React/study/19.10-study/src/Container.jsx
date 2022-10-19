import { useEffect, useState } from "react";
import axios from "axios";

const Container = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Nurullah");

  useEffect(() => {
    console.log("Number state güncellendi");
  }, [number]);

  useEffect(() => {
    console.log("Name state güncellendi");
  }, [name]);

  useEffect(() => {
    console.log("Component mount güncellendi");
  }, []);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      <br />
      <br />
      <hr />
      <br />
      <h1>{name}</h1>
      <button onClick={() => setName("Clarusway")}>Click</button>
    </div>
  );
};

export default Container;
