import { Route, Routes } from 'react-router-dom'
import Landing from './Landing'
import Users from './Users'
import UserDetails from './UserDetails'
import './App.css'
import Nav from './Nav'


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/users' element={<Users />} />
        <Route path='/users/:userId' element={<UserDetails />}/>
      </Routes>
    </>
  )
}

export default App
