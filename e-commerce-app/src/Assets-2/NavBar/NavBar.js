import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../store/Contexts'
import FirebaseContext from '../../store/FirebaseContext';
import "./NavBar.css"

function NavBar() {
    const {user}=useContext(AuthContext);
    const{firebase}=useContext(FirebaseContext);
    const history=useHistory()
    return (
        <div className='navbar-parent'>
            <img alt="logo" className="logo"src='https://t4.ftcdn.net/jpg/03/77/48/55/360_F_377485593_QHN6cjoNsNdOBoJNOwVRlFcHyZ0M9n3P.jpg'/>
            <nav className="navbar">
                <h2 className="navbar-brand">Shopriix</h2>

                <div className="navbar-full" >
                    <ul className="navbar-list ">
                        <li className="nav-items">
                            <a className="nav-link" href="https://www.google.co.in/">Home </a></li>
                        <li className="nav-items">
                            <a className="nav-link" href="https://www.google.co.in/">Link</a></li>
                        <li className="nav-items">
                            <a className="nav-link" href="https://www.google.co.in/">Action</a></li>
                        <li className="nav-items">
                            <a className="nav-link" href="https://www.google.co.in/">Another action</a></li>
                        
                        


                    </ul>
                    <form className='search'>
                        <input className="search-input" type="search" placeholder="Search" />
                        <button className="search-button" type="submit">Search</button>
                    </form>
                </div>
            </nav>
               <div className='login-text'>
                <span className='login-link' onClick={()=>{
                    history.push("/")
                }}>{user ? `Welcome    ${user.displayName}`:'Login'}</span>
               {user && <span className='logout' onClick={()=>{
                firebase.auth().signOut();
                history.push('/login')
               }}>Logout</span>} 
               </div>
               <img alt="lastlogo"className="last-logo"src='https://t4.ftcdn.net/jpg/03/77/48/55/360_F_377485593_QHN6cjoNsNdOBoJNOwVRlFcHyZ0M9n3P.jpg'/>

        </div>
    )
}

export default NavBar