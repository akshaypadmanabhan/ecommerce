import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import SignUpPage from './Pages/SignUpPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<SignUpPage/>} path="/signup" />


        </Routes>


      </BrowserRouter>

    </div >
  );
}

export default App;
