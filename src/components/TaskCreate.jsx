import React from "react";

const TaskCreate = () => {
  return (
    <div>
      <h3>Lütfen Task Ekleyiniz!</h3>
      <form className="task-form">
        <label>Başlık</label>
        <input />
        <label>Açıklama</label>
        <textarea />
        <button>Ekle</button>
      </form>
    </div>
  );
};

export default TaskCreate;
