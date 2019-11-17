import React from "react";
import { Radio } from "antd";
import Task from "./Task";

const TaskList = ({
  tasks,
  setCurrent,
  setTasks,
  finishedList,
  setFinishedList,
  unFinishedList,
  setUnfinishedList,
  currentList,
  setCurrentList
}) => {
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
      <Radio.Group onChange={onChange} value="null">
        <Radio.Button value="unfinished">Unfinished</Radio.Button>
        <Radio.Button value="finished">Finished</Radio.Button>
        <Radio.Button value="all">All</Radio.Button>
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
              setCurrentList={setCurrentList}
              currentList={currentList}
              setFinishedList={setFinishedList}
              setUnfinishedList={setUnfinishedList}
              unFinishedList={unFinishedList}
              finishedList={finishedList}
            />
          </div>
        ))}
      </div>
    );
  }
};
export default TaskList;
