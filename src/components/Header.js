import React from 'react'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-success bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{color:"white",fontSize:"25px", fontWeight:800, letterSpacing:"1.5px"}} href="/">TEXTMODI</a>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/" style={{color:"white"}}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" style={{color:"white"}}>About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
