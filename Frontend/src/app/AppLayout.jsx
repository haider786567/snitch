import React from 'react'
import { Outlet } from 'react-router';
import Nav from '../Features/Shared/component/Nav.jsx';


const AppLayout = () => {
  return (
    <>
        <Nav/>

        <Outlet />
    
    </>
  )
}

export default AppLayout
