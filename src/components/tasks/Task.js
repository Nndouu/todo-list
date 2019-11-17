import React, { Fragment, useState } from "react";
import { Button } from "antd";
import axios from "axios";

const Task = ({
  task,
  setCurrent,
  tasks,
  setTasks,
  setCurrentList,
  currentList,
  setFinishedList,
  setUnfinishedList,
  unFinishedList,
  finishedList
}) => {
  const { task_description, priority } = task;
  const { error, setError } = useState("");

  const onDelete = () => {
    deleteTask(task);
    setCurrent(null);
  };

  // Update task
  const update = async task => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.put(
        `https://todo-list-nndou-api.herokuapp.com/api/tasks/${task._id}`,
        task,
        config
      );
      setTasks(
        tasks.map(task => (task._id === res.data._id ? res.data : task))
      );
      setCurrentList(
        currentList.filter(taskCheck => taskCheck._id !== task._id)
      );
      task.type === "unfinished"
        ? setUnfinishedList([task, ...unFinishedList])
        : setFinishedList([task, ...finishedList]);
    } catch (err) {
      setError("An error occurred, please reload the page");
    }
  };

  // Change task type
  const onChangeType = () => {
    task.type === "unfinished"
      ? (task.type = "finished")
      : (task.type = "unfinished");
    update(task);
  };

  //Delete task
  const deleteTask = async task => {
    try {
      await axios.delete(
        `https://todo-list-nndou-api.herokuapp.com/api/tasks/${task._id}`
      );
      setTasks(tasks.filter(taskCheck => taskCheck._id !== task._id));
      setCurrentList(
        currentList.filter(taskCheck => taskCheck._id !== task._id)
      );
    } catch (err) {
      setError("An error occurred, please reload the page");
    }
  };

  return (
    <Fragment>
      <div className="task">
        <h5 className="task__description text-left">{task_description}</h5>
        <Button
          className="task__btn"
          type="primary"
          onClick={() => setCurrent(task)}
        >
          Edit
        </Button>
        <Button className="task__btn" type="danger" onClick={onDelete}>
          Delete
        </Button>
        <Button className="task__btn" onClick={onChangeType}>
          {task.type === "finished" ? "Unfinish" : "Finish"}
        </Button>
        <p className="float-right mt-2">Priority:{priority}</p>
      </div>
      {error && <div className="text-danger">{error}</div>}
    </Fragment>
  );
};
export default Task;
