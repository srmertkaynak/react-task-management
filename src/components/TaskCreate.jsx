import React from "react";

const TaskCreate = () => {
  return (
    <div className="task-create">
      <h3>Lütfen Task Ekleyiniz!</h3>
      <form className="task-form">
        <label className="task-label">Başlık</label>
        <input className="task-input" />
        <label className="task-label">Açıklama</label>
        <textarea className="task-input" />
        <button className="task-button">Ekle</button>
      </form>
    </div>
  );
};

export default TaskCreate;
