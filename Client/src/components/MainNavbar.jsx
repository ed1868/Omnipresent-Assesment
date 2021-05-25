import React from 'react'
import api from '../api'
import logo from '../logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

function MainNavbar(props) {

  return (


    <nav className="navbar navbar-expand-lg App-header">
      <div className="container-fluid">
        <a className="navbar-brand text-dark" href="https://www.omnipresent.com/">OmniPresent</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mt-1 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active mr-5" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active mr-5" aria-current="page" href="https://www.omnipresent.com/about-us">About</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  )
}

export default withRouter(MainNavbar)
