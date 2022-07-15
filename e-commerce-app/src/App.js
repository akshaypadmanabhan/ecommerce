import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import Home from './Pages/Home';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import { AuthContext } from './store/Contexts';
import FirebaseContext from './store/FirebaseContext';


function App() {

  const {setUser} =useContext(AuthContext)
  const {firebase} =useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
    
  })
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
