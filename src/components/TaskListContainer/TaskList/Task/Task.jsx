import { useContext } from "react";
import { TiTickOutline } from "react-icons/ti";
import { TaskContext } from "../../../Context/TaskContext/TaskContext";
export const Task = ({task}) => {

  const {tasks, setTasks} = useContext(TaskContext);

  const handleTaskDone = (taskTitle) => {

    const taskUpdated = tasks.filter(task => task.title !== taskTitle);
    
    setTasks(taskUpdated);

  }

  return (
    <div className="w-full">
      <div className="w-3/4 flex h-auto flex-col text-black mx-auto my-3 bg-slate-50 rounded-xl">
        <div className="w-full h-full">
          <h2 className="font-rubik font-medium text-3xl bg-violet-500 p-3 rounded-t-xl" id="task-title">{task.title}</h2>
          <p className="font-rubik font-normal text-xl p-3 h-full">{task.text}</p>
          {/* <FaRegTrashCan className="w-10 h-10 text-red-500 mx-auto my-3 cursor-pointer"/> */}
          <div className='flex justify-end m-2'>
            <TiTickOutline onClick={() => handleTaskDone(task.title)} className='w-10 h-10 text-purple-500 cursor-pointer'/>            
          </div>

        </div>
      </div>

    </div>
  )
}

