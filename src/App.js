
import './App.css'; 
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './components/Main'; 
import Home from './components/Home'
import Shop from './components/Shop'
import Category from './components/Category'
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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
