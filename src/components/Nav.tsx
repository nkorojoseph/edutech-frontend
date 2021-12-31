import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthenticationButton from './authentication-button'
import { useAuth0 } from '@auth0/auth0-react';


function Nav() {
    const {isAuthenticated} = useAuth0()
    return (
        <div>
          
    <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-dark" aria-label="Main navigation">
        <div className="container">

{/* <!-- <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative"></a> --> */}

            
            <a className="navbar-brand logo-text" href={`${process.env.REACT_APP_URL}`}>Relight</a>

            <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault" >
                <ul className="navbar-nav ms-auto navbar-nav-scroll">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href={`${process.env.REACT_APP_URL}/`}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={`${process.env.REACT_APP_URL}/#about`}>About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={`${process.env.REACT_APP_URL}/#services`}>Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={`${process.env.REACT_APP_URL}/#works`}>Our Works</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>

                    <li className="nav-item">
                        {isAuthenticated?

                        <NavLink
                            to={"/profile"}
                            className={'nav-link'}
                        >
                            Profile
                        </NavLink> : ' '
                        
                        }  
                    </li>

                    {
                        isAuthenticated?

                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false" href="#">Products</a>
                        
                        <ul className="dropdown-menu" aria-labelledby="dropdown01">
                            <li>
                                <NavLink 
                                    to={"/research_papers"}
                                    className={'nav-link'}
                                >
                                    Research Papers
                                </NavLink>
                            </li>


                            <li><div className="dropdown-divider"></div></li>
                            <li><a className="dropdown-item" href="terms.html">Research Articles</a></li>
                            <li><div className="dropdown-divider"></div></li>
                            <li><a className="dropdown-item" href="privacy.html">Free Books</a></li>
                        </ul>
                    </li> : ''
                    }

                    <li className="nav-item">
                        
                        <AuthenticationButton></AuthenticationButton>
                    </li>
                </ul>
            </div> 
        </div> 
    </nav> 
    
        </div>
    )
}

export default Nav
