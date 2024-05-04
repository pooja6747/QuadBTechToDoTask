import './App.css'
import TaskList from './components/TakList'
import TaskInput from './components/TaskInput'

function App() {


  return (
    <>
    <div className="container">
    <TaskInput/>
    <TaskList/>
    </div>
   
    </>
  )
}

export default App
