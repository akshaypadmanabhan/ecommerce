import React from 'react'
import "./NavBar.css"

function NavBar() {
    return (
        <div className='navbar-parent'>
            <img alt="logo"className='logo'src='https://play-lh.googleusercontent.com/DXF7_kJPaP05Q14BbG4xmsiu4eRbEOnRpJma-qGMMu3NVImdMwzmRnNXogCuRu5YZw' />
            <nav className="navbar">
                <h2 className="navbar-brand">Shopriix</h2>

                <div className="navbar-full" >
                    <ul class="navbar-list ">
                        <li className="nav-items">
                            <a className="nav-link" href="#">Home </a></li>
                        <li className="nav-items">
                            <a className="nav-link" href="#">Link</a></li>
                        <li className="nav-items">
                            <a className="nav-link" href="#">Action</a></li>
                        <li className="nav-items">
                            <a className="nav-link" href="#">Another action</a></li>
                        <li className="nav-items">
                            <a className="nav-link" href="#">Something else here</a></li>
                        <li className="nav-items">
                            <a className="nav-link" href="#">Disabled</a></li>


                    </ul>
                    <form className='search'>
                        <input className="search-input" type="search" placeholder="Search" />
                        <button className="search-button" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </div>
    )
}

export default NavBar