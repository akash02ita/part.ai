import React from 'react'
import { NavLink } from 'react-router-dom'
import links from "../util/links"

const Navbar = () => {
  return (
    <div className='navbar'>{links.map((link)=> {
        const {id, name, icon, path} = link
        return (
          <NavLink
            className="navbar-link"
            key={id}
            to={path}
            style={{ textDecoration: "none" }}
          >
            <div className="navbar-item">
              <div className="navbar-icon">{link.icon}</div>
              {link.name}
            </div>
          </NavLink>
        );
    })}</div>
  )
}

export default Navbar