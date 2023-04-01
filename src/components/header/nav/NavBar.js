import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
function NavBar() {
    
  return (
    <div>

    <div className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
        <a className="navbar-brand"><Link to='/'>HopeRise</Link></a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav ml-auto">
                <a  className="nav-item nav-link"><Link to='/'>Home</Link></a>
                <a  className="nav-item nav-link active"><Link to='/about'>About</Link></a>
                <a  className="nav-item nav-link"><Link to='/blog'>Blog</Link></a>
                <a  className="nav-item nav-link"><Link to='/contact'>Contact</Link></a>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default NavBar