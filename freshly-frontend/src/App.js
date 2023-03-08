import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={
      <PrivateRoute><Menu/></PrivateRoute>
      }/>
      
   </Routes>
      
    
    </BrowserRouter>
  );
}

export default App;
