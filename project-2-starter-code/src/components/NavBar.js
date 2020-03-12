import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      burger: false
    }
  }
  handleBurger() {
    this.setState({ burger: !this.state.burger })
  }

  render() {
    return <nav className="navbar">
      <div className="container">
        <a role="button" className="navbar-burger burger" onClick={() => this.handleBurger()}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div className={this.state.burger ? "navbar-menu is-active" : "navbar-menu"}>
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
            <div className="navbar-item">
              <Link to="/favourites"> Favourites </Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  }

}

export default NavBar 