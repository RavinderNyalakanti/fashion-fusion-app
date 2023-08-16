
import './App.css'; 
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './components/Main'; 
import Home from './components/Home'
import Shop from './components/Shop'
import Category from './components/Category'
import Accessories from './components/Accessories';
import AdminPanel from './components/AdminPanel';
import ContactUs from './components/ContactUs';
import CheckOut from './components/Shop/CheckOut';
// import  Login  from './components/Login'

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <BrowserRouter>  
      <Main/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shoping' element={<Shop/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/admin-panel' element={<AdminPanel/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
