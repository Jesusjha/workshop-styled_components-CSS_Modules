import React from 'react'
import { Outlet } from 'react-router-dom'

const TopTitle = () => {
  return (
    <>
    <h1>CSS Modules</h1>
    <Outlet />
    </>
  )
}

export default TopTitle