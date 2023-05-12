import React, { useState } from 'react'
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import OneProduct from './components/OneProduct';
import './App.css';
import Form from './components/Form';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

const App = () => {


  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route element={<Main/>} path="/home" default /> 
      <Route element={<OneProduct/>} path="/products/:id" />
      <Route element={<UpdateProduct/>} path='/products/edit/:id' />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
