import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  //? CRUD : (GET-READ)
  const getTutorials = async () => {
    try {
      const { data } = await axios(url);
      console.log(data);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  //? didMount
  useEffect(() => {
    getTutorials();
    //
  }, []);

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutor={tutorials} />
    </>
  );
};

export default Home;
