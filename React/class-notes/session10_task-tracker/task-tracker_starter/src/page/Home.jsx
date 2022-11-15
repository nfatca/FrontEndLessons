import React from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";

const Home = () => {
  return (
    <div>
      Home
      <AddTask />
      <TaskList />
    </div>
  );
};

export default Home;
