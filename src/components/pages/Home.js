import React, { Fragment } from "react";
import TaskForm from "../tasks/TaskForm";
import TaskList from "../tasks/TaskList";

const Home = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6">
          <TaskForm />
        </div>
        <div className="col-md-6">
          <TaskList />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
