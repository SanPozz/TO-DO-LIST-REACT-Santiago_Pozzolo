import { useContext } from "react"

import { TaskContext } from "../../Context/TaskContext/TaskContext"

import { Task } from "./Task/Task"

export const TaskList = () => {

    const { tasks } = useContext(TaskContext)

    console.log(tasks);

    return (
        <div className="text-white text-3xl flex justify-center items-center w-full h-full ">
                    <div className=" flex flex-col w-4/5 my-10 h-5/6 bg-[#fafafa10] backdrop-blur rounded-2xl border-[1px] border-purple-200">
                        <div className="font-rubik font-extralight text-4xl text-center border-b-[1px] border-purple-200">
                            <h2 className="my-2">Pending Tasks</h2>
                        </div>

                        <div className="w-full h-full overflow-auto">
                            {tasks.length != 0 ? (
                                tasks.map((task, index) => (

                                    <Task
                                        key={index}
                                        task={task}
                                    />

                                ))
                            ) : (
                                <div className="flex justify-center items-center w-full h-full">
                                    <h2>No tasks pending</h2>
                                </div>
                            )}                            
                        </div>

                    </div>
        </div>
    )
}

