import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './layout/navbar/navbar';
import Home from './page/home/home';

import './App.css';
import './scss/style.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path = '/' element = {<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
