import React, { useState } from "react";

const TaskShow = ({ task, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleUpdateClick = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <></>
      ) : (
        <div>
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
            <button onClick={handleUpdateClick} className="task-button-update">
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskShow;
