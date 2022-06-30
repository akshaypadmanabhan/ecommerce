import React from 'react';
import createRoot from 'react-dom';
import App from './App';
import firebase from "./Firebase/Config"
import FirebaseContext from './store/FirebaseContext';

createRoot.render(

<FirebaseContext.Provider value={{firebase}}>
<App /> 

</FirebaseContext.Provider>

, document.getElementById('root'));