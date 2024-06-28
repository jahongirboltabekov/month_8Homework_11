import { Route, Routes } from 'react-router-dom'
import './App.css'
import Admin from './pages/admin/Admin'
import Auth from './pages/auth/Auth'
import Home from './pages/home/Home'
import Login from './pages/login/Login'

function App() {

  return (
    <>

      <h1>Auth Route</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Auth/>}>
          <Route path='admin' element={<Admin/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
