import React from 'react'
import Login from './components/Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home/Home'
function App() {
  return (
    <div>
      <Routes>
        
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={  <Login/>}/>
        <Route path='/login/home' element={<Home/>}/>
      </Routes>
    
    </div>
  )
}

export default App