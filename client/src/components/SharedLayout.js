import React from 'react'
import {Outlet} from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div>
        <Outlet/>
        <h3>Hello</h3>
    </div>
  )
}

export default SharedLayout