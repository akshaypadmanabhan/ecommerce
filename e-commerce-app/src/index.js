import React from 'react';
import createRoot from 'react-dom';
import App from './App';
import firebase from "./Firebase/Config"
import FirebaseContext from './store/FirebaseContext';
import Contexts from './store/Contexts'
import Context from './store/Contexts';

createRoot.render(

<FirebaseContext.Provider value={{firebase}}>
    <Context>
    <App /> 
    </Context>


</FirebaseContext.Provider>

, document.getElementById('root'));