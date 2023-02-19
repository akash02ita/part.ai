import React from 'react'
import { NavLink } from 'react-router-dom'
import links from "../util/links"

const Navbar = () => {
  return (
    <div className='navbar'>{links.map((link)=> {
        const {id, name, icon, path} = link
        return (
          <NavLink key={id} to={path}>
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