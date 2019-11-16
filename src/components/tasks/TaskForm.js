import React, { Fragment, useState } from "react";

const TaskForm = () => {
  // const contactContext = useContext(ContactContext);

  // const { addContact, current, updateContact, clearCurrent } = contactContext;

  // //Update form with the current value when click Edit btn
  // useEffect(() => {
  //   if (current !== null) {
  //     setContact(current);
  //   } else {
  //     setTask({
  //   task_description: "",
  //   priority: "",
  //   type: "unfinished"
  // });
  //   }
  // }, [contactContext, current]);

  const [task, setTask] = useState({
    task_description: "",
    priority: "",
    type: "unfinished"
  });

  const { task_description, priority, type } = task;

  const onChange = e => setTask({ ...task, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // if (current == null) {
    //   addContact(contact);
    // } else {
    //   updateContact(contact);
    // }

    setTask({
      task_description: "",
      priority: "",
      type: "unfinished"
    });
  };

  const clearAll = () => {
    // clearCurrent();
  };

  return (
    <Fragment>
      <form
        className="contact-form text-center mx-5 mt-5 pt-5"
        onSubmit={onSubmit}
      >
        <h2 className="text-primary text-center pb-5">
          {/* {current ? "Edit Contact" : "Add Contact"} */}
        </h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Task"
            name="task"
            value={task_description}
            onChange={onChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type=""
            placeholder="Priority"
            name="priority"
            value={priority}
            onChange={onChange}
          ></input>
        </div>
        <h6>Contact Type</h6>
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
        <button type="submit" className="btn btn-contacts btn-block mt-4">
          {/* {current ? "Update Contact" : "Add Contact"} */}
        </button>
        {
          <div>
            <button
              className="btn btn-primary btn-block mt-1"
              onClick={clearAll}
            >
              Clear
            </button>
          </div>
        }
      </form>
    </Fragment>
  );
};
export default TaskForm;
