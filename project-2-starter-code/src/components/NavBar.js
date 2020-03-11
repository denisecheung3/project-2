import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return <nav className="navbar">
      <div className="container">
        <div className="navbar-menu is-active">
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/"> Home </Link>
            </div>
            <div className="navbar-item">
              <Link to="/drinks"> Drinks </Link>
            </div>
            <div className="navbar-item">
              <Link to="/search"> Search </Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  }

}

export default NavBar 