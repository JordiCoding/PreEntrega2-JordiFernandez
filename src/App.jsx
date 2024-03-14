import React, { useContext } from 'react';
import './App.css';
import Home from './screens/Home';
import { Route, Routes } from 'react-router-dom';
import Checkout from './screens/Checkout';
import About from './screens/About';
import NavBar from './components/NavBar';
import { UserContext, UserProvider } from './store/UserContext';

function App() {

  return (
    <UserProvider>
        <div className="App">
          <div className="header">La Fruteria</div>
          <NavBar  /> {/* Pass cartItems as a prop to NavBar */}
          <div className="content">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/checkout' element={<Checkout/>} />
            </Routes>
          </div>
        </div>
    </UserProvider>
  );
}

export default App;
