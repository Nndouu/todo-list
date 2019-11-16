import React, { useState } from "react";
import { Radio } from "antd";
import Task from "./Task";

const TaskList = ({ tasks, setCurrent, setTasks }) => {
  const [finishedList, setFinishedList] = useState(
    tasks.filter(taskCheck => taskCheck.type === "finished")
  ); // eslint-disable-next-line
  const [unFinishedList, setUnfinishedList] = useState(
    tasks.filter(taskCheck => taskCheck.type === "unfinished")
  ); // eslint-disable-next-line
  const [currentList, setCurrentList] = useState(unFinishedList);

  const onChange = e => {
    if (e.target.value === "unfinished") {
      setCurrentList(unFinishedList);
    } else if (e.target.value === "finished") {
      setCurrentList(finishedList);
    } else {
      setCurrentList(tasks);
    }
  };

  const selecter = (
    <div className="mx-4">
      <Radio.Group onChange={onChange} defaultValue="unfinished">
        <Radio.Button value="unfinished">Unfinished</Radio.Button>
        <Radio.Button value="finished">Finished</Radio.Button>
        <Radio.Button value="All">All</Radio.Button>
      </Radio.Group>
    </div>
  );

  if (!tasks) {
    return <div></div>;
  } else {
    return (
      <div className="py-3">
        {selecter}
        {currentList.map(task => (
          <div key={task._id}>
            <Task
              task={task}
              setCurrent={setCurrent}
              tasks={tasks}
              setTasks={setTasks}
            />
          </div>
        ))}
      </div>
    );
  }
};
export default TaskList;
