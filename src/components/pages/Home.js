import React, { Fragment, useState, useEffect } from "react";
import { Spin, Icon } from "antd";
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
    // eslint-disable-next-line
  }, []);

  const antIcon = <Icon type="loading" style={{ fontSize: 32 }} spin />;

  if (loading) {
    return (
      <Fragment>
        <div className="row mt-5">
          <div className="col-1 m-auto">
            <Spin indicator={antIcon} />
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className="row">
          <div className="col-lg-6">
            <TaskForm
              current={current}
              setCurrent={setCurrent}
              setTasks={setTasks}
              tasks={tasks}
            />
          </div>
          <div className="col-lg-6">
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
