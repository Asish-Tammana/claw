import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';


function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
