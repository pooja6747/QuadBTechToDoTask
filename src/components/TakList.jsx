// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../redux/slices/TaskSlice';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleMarkCompleted = (id) => {
    dispatch(toggleTaskCompletion(id));
  }

  return (
    <ul className="task-list w-100 px-2">
    {tasks.map((task,index) => (
      <li key={task.id} className={`task-item w-100 border my-3 py-2 px-1 d-flex justify-content-between align-items-center ${task.isCompleted ? 'completed' : ''}`}>
        <div style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
          <span className='mx-1'>{index+1}.</span> <span>{task.text}</span>
        </div>
        <div className="button-block">
        <button onClick={() => handleDelete(task.id)} className="btn btn-primary mx-2">
          Delete
        </button>
        <button className="btn btn-primary mx-2" onClick={() => handleMarkCompleted(task.id)}>
          {task.isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
        </button>
        </div>
        
      </li>
    ))}
  </ul>
  );
}

export default TaskList;
