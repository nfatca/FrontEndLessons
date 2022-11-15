import React from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState();
  const url = "https://6372bd68348e947299fc3310.mockapi.io/api/tasks";

  const toogle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  //? CRUD - READ

  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
    // console.log(task);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button
        variant="danger"
        size="lg"
        onClick={() => {
          toogle();
        }}
      >
        {text}
      </Button>

      {isOpen && <AddTask />}

      <TaskList task={task} />
    </div>
  );
};

export default Home;
