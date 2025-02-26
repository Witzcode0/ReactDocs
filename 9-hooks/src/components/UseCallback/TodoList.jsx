import React, { useState, useCallback } from "react";

// Task Component (Child)
const Task = React.memo(({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <tr>
      <td>{task.id}</td>
      <td>{task.text}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
});

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Memoized delete function
  const deleteTask = useCallback((taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  // Function to add new tasks
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask }]);
    setNewTask("");
  };

  return (
    <>
      <h2>Todo List</h2>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={addTask}>Add Task</button>

      <table border={1}>
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Task</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => <Task key={task.id} task={task} onDelete={deleteTask} />)
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center", fontWeight: "bold" }}>
                No tasks found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default TodoList;
