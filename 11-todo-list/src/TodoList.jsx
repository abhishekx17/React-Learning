import React, { useState } from "react";
import "./index.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prev) => [...prev, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setIsEditing(index);
    setEditValue(tasks[index]);
  };

  const saveEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editValue;
    setTasks(updatedTasks);
    setIsEditing(null);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {isEditing === index ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button className="add-btn" onClick={() => saveEdit(index)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task}</span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                >
                  Del
                </button>
                <button className="edit-btn" onClick={() => editTask(index)}>
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
