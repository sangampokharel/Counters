import React from 'react'

function Navbar(props) {
    
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
    <span className="btn btn-primary">{props.onNavCount()}</span>
            </nav>
        </div>
    )
}

export default Navbar
