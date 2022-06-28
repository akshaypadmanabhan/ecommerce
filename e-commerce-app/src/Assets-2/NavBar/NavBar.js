import React from 'react'
import "./NavBar.css"

function NavBar() {
    return (
        <div className='navbar-parent'>
            <img alt="logo" className="logo"src='https://t4.ftcdn.net/jpg/03/77/48/55/360_F_377485593_QHN6cjoNsNdOBoJNOwVRlFcHyZ0M9n3P.jpg'/>
            <nav className="navbar">
                <h2 className="navbar-brand">Shopriix</h2>

                <div className="navbar-full" >
                    <ul className="navbar-list ">
                        <li className="nav-items">
                            <a className="nav-link" href="#">Home </a></li>
                        <li className="nav-items">
                            <a className="nav-link" href="#">Link</a></li>
                        <li className="nav-items">
                            <a className="nav-link" href="#">Action</a></li>
                        <li className="nav-items">
                            <a className="nav-link" href="#">Another action</a></li>
                        
                        


                    </ul>
                    <form className='search'>
                        <input className="search-input" type="search" placeholder="Search" />
                        <button className="search-button" type="submit">Search</button>
                    </form>
                </div>
            </nav>
               <div className='login-text'>
                <a className='login-link'>Login</a>
               </div>
               <img className="last-logo"src='https://t4.ftcdn.net/jpg/03/77/48/55/360_F_377485593_QHN6cjoNsNdOBoJNOwVRlFcHyZ0M9n3P.jpg'/>

        </div>
    )
}

export default NavBar