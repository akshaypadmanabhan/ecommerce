import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import Home from './Pages/Home';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';


function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        
        <Route  exact path="/">
        <Home/>
        </Route>
        <Route  path="/signup">
        <SignUpPage />
        </Route>
        <Route  path="/login">
        <LoginPage/>
        </Route>


        


      </BrowserRouter>

    </div >
  );
}

export default App;
