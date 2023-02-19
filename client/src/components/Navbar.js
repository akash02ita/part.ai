import React from 'react'
import { NavLink } from 'react-router-dom'
import links from "../util/links"

const Navbar = () => {
  return (
    <div className='navbar'>{links.map((link)=> {
        const {id, name, icon, path} = link
        return <NavLink key={id} to={path}>{link.name}</NavLink>
    })}</div>
  )
}

export default Navbar