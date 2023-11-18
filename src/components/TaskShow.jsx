import React from "react";

const TaskShow = ({ task, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleUpdate = () => {
    return;
  };
  return (
    <div className="task-show">
      <h3 className="task-title">Başlık</h3>
      <p>{task.title}</p>
      <h3 className="task-title">Açıklama</h3>
      <p>{task.taskDesc}</p>
      <div>
        <button
          onClick={handleDeleteClick}
          value={task.id}
          className="task-button-delete">
          Sil
        </button>
        <button onClick={handleUpdate} className="task-button-update">
          Güncelle
        </button>
      </div>
    </div>
  );
};

export default TaskShow;
