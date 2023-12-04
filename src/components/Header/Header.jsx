import './Header.css'
import { InputTasks } from './InputsTasks/InputTasks'

export const Header = () => {

    return (
        <div className='flex flex-col justify-center items-center font-rubik font font-semibold bg-black w-5/12 '>
            <div className='flex flex-col justify-center items-center w-full'>
                <div className=''>
                    <h1 className='text-white pb-8 text-6xl'>
                        TO-DO LIST
                    </h1>
                    <h2 className='text-white text-6xl'>
                        by <a className='transition ease-in-out text-violet-500 hover:brightness-150' href="https://github.com/SanPozz" target='_blank' rel='noreferrer'>SanPozz :)</a>
                    </h2>                    
                </div>


                <InputTasks/>
            </div>


            
        </div>
    )
}