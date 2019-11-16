import React, { Fragment } from "react";
import axios from "axios";

const Task = ({ task, setCurrent, tasks, setTasks }) => {
  const { task_description, type, priority } = task;

  const onDelete = () => {
    deleteTask(task);
    setCurrent(null);
  };

  //Delete task
  const deleteTask = async task => {
    try {
      await axios.delete(
        `https://todo-list-nndou-api.herokuapp.com/api/tasks/${task._id}`
      );
      setTasks(tasks.filter(taskCheck => taskCheck._id !== task._id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <div className="task">
        <h5 className="task__description text-left">
          {task_description}
          <span className="task__type">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </h5>
        <button
          className="btn btn-secondary btn-sm"
          //Set current contact when click Edit btn
          onClick={() => setCurrent(task)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm ml-1" onClick={onDelete}>
          Delete
        </button>
        <button className="btn btn-warning btn-sm ml-1">Unfinish</button>
        <p className="float-right mt-2">Priority:{priority}</p>
      </div>
    </Fragment>
  );
};
export default Task;
