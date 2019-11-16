import React, { Fragment, useState, useEffect } from "react";
import { Button } from "antd";
import axios from "axios";

const TaskForm = ({ current, setCurrent, setTasks, tasks }) => {
  const [task, setTask] = useState({
    task_description: "",
    priority: 0,
    type: "unfinished"
  });

  const { task_description, priority, type } = task;

  //Update form with the current value when click Edit btn
  useEffect(() => {
    if (current !== null) {
      setTask(current);
    } else {
      setTask({
        task_description: "",
        priority: "",
        type: "unfinished"
      });
    }
  }, [current]);

  const onChange = e => setTask({ ...task, [e.target.name]: e.target.value });

  //Add task
  const addTask = async task => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post(
        "https://todo-list-nndou-api.herokuapp.com/api/tasks",
        task,
        config
      );
      setTasks([res.data, ...tasks]);
    } catch (err) {
      console.log(err.response.msg);
    }
  };

  //Update task
  const updateTask = async task => {
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
    } catch (err) {
      console.log(err.response.msg);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (current == null) {
      addTask(task);
    } else {
      updateTask(task);
    }
    setTask({
      task_description: "",
      priority: "",
      type: "unfinished"
    });
  };

  const clearAll = () => {
    setCurrent(null);
  };

  return (
    <Fragment>
      <form
        className="task-form text-center mx-5 mt-5 pt-5"
        onSubmit={onSubmit}
      >
        <h2 className="text-primary pb-5">
          {current ? "Edit Task" : "Add Task"}
        </h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Task"
            name="task_description"
            value={task_description}
            onChange={onChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="number"
            placeholder="Set Priority"
            name="priority"
            value={priority}
            onChange={onChange}
          ></input>
        </div>
        {current && (
          <Fragment>
            <h6>Task Type</h6>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                value="unfinished"
                onChange={onChange}
                checked={type === "unfinished"}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Unfinished
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                value="finished"
                onChange={onChange}
                checked={type === "finished"}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Finished
              </label>
            </div>
          </Fragment>
        )}
        <button type="submit" className="btn btn-primary btn-block mt-4">
          {current ? "Update Contact" : "Add Contact"}
        </button>
        {current && (
          <div>
            <button
              className="btn btn-secondary btn-block mt-1"
              onClick={clearAll}
            >
              Clear
            </button>
          </div>
        )}
      </form>
    </Fragment>
  );
};
export default TaskForm;
