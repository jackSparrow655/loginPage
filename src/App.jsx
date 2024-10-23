import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'

const App = () => {

  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex-col'>
      <Navbar/>

      <Routes>
        <Route path='/' element=<Home/> />
        <Route path='/login' element = <Login/>/>
        <Route path='/signup' element = <Signup/>/>
        <Route path='/dashboard' element = <Dashboard/>/>
      </Routes>
    </div>
  )
}

export default App
