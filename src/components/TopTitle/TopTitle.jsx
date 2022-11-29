import React from 'react'
import { Outlet } from 'react-router-dom'
import { TopHeading } from '../../ui/index'

const TopTitle = () => {
  return (
    <>
      <TopHeading>Styled-components</TopHeading>
      <Outlet />
    </>
  )
}

export default TopTitle