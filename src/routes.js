
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Index'
import Dashboard from './pages/Dashboard'
import Membros from './pages/Membros/Index'
import Cadastro from './pages/Cadastro/Index'


const AppRoutes = () => {
  
  
  // {
    // name: '',tel:'', email:'', dateBirth:'', dateBatism:'', dateMember:'', jobChurch:'', congregation:'', linkFacebook:'', linkInsta:'', comentary:'' }
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/membros' element={<Membros />}></Route>
          <Route path='/cadastro' element={<Cadastro />}></Route>
        </Routes>
      </BrowserRouter>
    
  )
}

export default AppRoutes