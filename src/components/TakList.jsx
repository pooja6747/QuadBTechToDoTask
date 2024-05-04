// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/slices/TaskSlice';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          {task.text}
          <button onClick={() => handleDelete(task.id)} className="delete-btn">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
