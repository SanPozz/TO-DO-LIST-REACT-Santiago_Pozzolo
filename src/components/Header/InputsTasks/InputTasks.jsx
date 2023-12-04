import { InputText } from "./InputText"
import { InputTitle } from "./InputTitle"

import { useContext } from "react"
import { TaskContext } from "../../Context/TaskContext/TaskContext"


export const InputTasks = () => {

    const {tasks, setTasks} = useContext(TaskContext)
    
    const handleSubmit = () => {

        

        const taskTitle = document.getElementById('task-title')
        const taskText = document.getElementById('task-text')

        let title = taskTitle.value
        let text = taskText.value

        if (taskTitle.value == '' || taskText.value == '') {
            alert('Please complete the form')
            return
        }

        const taskToDo = {
            title,
            text
        }


        setTasks([...tasks, taskToDo ])

    }

    return (
            <div className='flex flex-col mt-10 font-rubik font-normal w-full m-auto'>
                <InputTitle />
                <InputText />
                <div className="flex justify-start w-full">
                    <button
                    type="submit"
                    onClick={handleSubmit} 
                    className="transition ease-in-out text-white bg-violet-600 hover:brightness-[0.9] font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 ml-10 w-1/5">
                        Add
                    </button>                    
                </div>

            </div>
    )
}