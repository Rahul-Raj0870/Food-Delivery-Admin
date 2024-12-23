
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Navside from './components/Navside'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { ToastContainer } from 'react-toastify';

function App() {


  return (
    <div>
      <ToastContainer />
       <Navbar />
       <hr style={{marginTop:'70px'}} />
       <div className='app-content'>
        <Navside />
        <Routes>
          <Route path='/add' element={<Add/>} />
          <Route path='/list' element={<List/>} />
          <Route path='/orders' element={<Orders/>} />
        </Routes>
       </div>
       

    </div>
  )
}

export default App
