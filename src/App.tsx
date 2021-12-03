import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavBar from './components/MyNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <div className=" total-cover">
      <BrowserRouter>
      <MyNavBar />

      <Routes>
       <Route path="/" element={<Home/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
