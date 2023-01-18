import {Link, Outlet, useNavigate} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import App from './App'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col p-4 justify-center text-white items-center w-screen h-72'>
       <h1 className="text-6xl mb-6">Quiz Game</h1>
       <span className="text-md mb-4">Please press Ok to take Quiz</span>
       <Link to='play' className="bg-red-600 p-2 w-24 rounded-md shadow-xl text-xl text-center active:bg-red-400 transition-all ease-in-out duration-200 ">Ok</Link>  
     
      <Outlet />
    </div>
  )
}

export default Home
