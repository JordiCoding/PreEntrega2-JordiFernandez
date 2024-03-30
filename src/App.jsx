import React, { useContext } from 'react';
import './App.css';
import Home from './screens/Home';
import { Route, Routes } from 'react-router-dom';
import Checkout from './screens/Checkout';
import Verduras from './screens/Verduras';
import NavBar from './components/NavBar';
import { UserContext, UserProvider } from './store/UserContext';

function App() {

  return (
    <UserProvider>
        <div className="App">
          <div className="header">La Fruteria</div>
          <NavBar  /> 
          <div className="content">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/Verduras' element={<Verduras/>} />
              <Route path='/checkout' element={<Checkout/>} />
            </Routes>
          </div>
        </div>
    </UserProvider>
  );
}

export default App;
