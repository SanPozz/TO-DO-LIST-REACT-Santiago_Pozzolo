
import TaskContextProvider from "./components/Context/TaskContext/TaskContextProvider"
import { Header } from "./components/Header/Header"
import { TaskListContainer } from "./components/TaskListContainer/TaskListContainer"
function App() {



  return (
    
    <TaskContextProvider>
      <div className="h-screen flex bg-black">
          <Header/>
          <TaskListContainer/>
      </div>
    </TaskContextProvider>

  )
}

export default App
