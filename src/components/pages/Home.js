import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "../tasks/TaskForm";
import TaskList from "../tasks/TaskList";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get all tasks
  const getTask = async () => {
    const res = await axios.get(
      `https://todo-list-nndou-api.herokuapp.com/api/tasks`
    );
    setTasks(res.data);
    if (tasks) {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getTask();
  }, []);

  if (loading) {
    return <div></div>;
  } else {
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-6">
            <TaskForm
              current={current}
              setCurrent={setCurrent}
              setTasks={setTasks}
              tasks={tasks}
            />
          </div>
          <div className="col-md-6">
            <TaskList
              tasks={tasks}
              setCurrent={setCurrent}
              setTasks={setTasks}
            />
          </div>
        </div>
      </Fragment>
    );
  }
};

export default Home;
