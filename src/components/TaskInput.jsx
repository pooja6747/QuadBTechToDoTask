import { useDispatch,useSelector } from 'react-redux';
import { addTask} from '../redux/slices/TaskSlice';
import { useState } from 'react';


function TaskInput() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("handle submit")
    e.preventDefault();
    if (task.trim() === '') return;
    dispatch(addTask({ id: Math.random().toString(36).substr(2, 9), text: task }));
    setTask('');
    console.log("task",task)
  };


  return (
  <>
   <form onSubmit={handleSubmit} className="mt-4 mb-4">
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Task"
        value={task}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary">Add Task</button>
    </div>
  </form>

  </>
   
  );
}

export default TaskInput;
