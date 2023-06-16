import React from 'react'
import {NavLink} from "react-router-dom"
import './Navbar.css'
export const Navbar = () => {
    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href=".">The Daily Planet</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-light"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <NavLink  className="nav-link text-white" aria-current="page" to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  text-white" aria-current="page" to="/general">General</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  text-white" aria-current="page" to="/business">Business</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  text-white" aria-current="page" to="/entertainment">Entertainment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  text-white" aria-current="page" to="/health">Health</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  className="nav-link  text-white" aria-current="page" to="/science">Science</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  text-white" aria-current="page" to="/sports">Sports</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" aria-current="page" to="/technology">Technology</NavLink>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
