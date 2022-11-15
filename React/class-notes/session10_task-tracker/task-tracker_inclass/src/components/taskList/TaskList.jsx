import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

const TaskList = ({ task }) => {
  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;
        return (
          <div
            key={id}
            className="mt-2 d-flex justify-content-between bg-secondary rounded-2 p-2"
          >
            <div>
              <h3>{task}</h3>
              <p>{date}</p>
            </div>
            <div>
              <RiDeleteBack2Fill
                style={{
                  cursor: "pointer",
                  marginRight: "20px",
                  marginTop: "15px",
                  fontSize: "2rem",
                  boxShadow: "2px 2px 2px #ECAB9E",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
