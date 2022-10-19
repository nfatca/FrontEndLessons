import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [tutorial, setTutorial] = useState([]);
  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  const getTutorials = async () => {
    try {
      const { data } = await axios(url);
      console.log(data);
      setTutorial(data);
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
      <AddTutorial />
      <TutorialList tutor={tutorial} />
    </>
  );
};

export default Home;
