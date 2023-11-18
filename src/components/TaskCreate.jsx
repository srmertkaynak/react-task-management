import React, { useState } from "react";

const TaskCreate = () => {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setTaskDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="task-create">
      <h3>Lütfen Task Ekleyiniz!</h3>
      <form className="task-form" onSubmit={handleSubmit}>
        <label className="task-label">Başlık</label>
        <input
          value={title}
          onChange={handleTitleChange}
          className="task-input"
        />
        <label className="task-label">Açıklama</label>
        <textarea
          value={taskDesc}
          onChange={handleDescChange}
          className="task-input"
          rows={4}
        />
        <button className="task-button">Ekle</button>
      </form>
    </div>
  );
};

export default TaskCreate;
