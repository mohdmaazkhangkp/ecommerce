import React from 'react'
import ProductList from './pages/ProductList';
import Home from './pages/Home'
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import Login from './pages/Login';
import CartPage from './pages/CartPage';
import {Link, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/product-page' element={<ProductPage/>}/>
    </Routes>
    </>
  );
}

export default App;
