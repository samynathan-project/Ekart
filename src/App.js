import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Cart } from './components/Cart';
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [cart, setCart] = useState([]);
  return (
     <>
        <BrowserRouter>
        <Header cart={cart} />
        <div className='container'>
          <Routes>
            <Route path='/Home' element={<Home cart= {cart} setCart= {setCart} />} />
            <Route path='/Cart' element={<Cart cart= {cart} setCart= {setCart} />} />
            <Route path='/' element={<Login cart= {cart} setCart= {setCart} />} />
            <Route path='/Register' element={<Register cart= {cart} setCart= {setCart} />} />
          </Routes>
        </div>
        </BrowserRouter>
     </>
  );
}

export default App;
