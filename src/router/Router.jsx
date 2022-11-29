import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TopTitle from '../components/TopTitle/TopTitle'
import GridPage from '../pages/GridPage/GridPage'
import { Class, Home, Animation } from '../pages/index'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<TopTitle />}>
        <Route index element={<Home />} />
        <Route path='class' element={<Class />} />
        <Route path='animation' element={<Animation />} />
        <Route path='grid' element={<GridPage />} />
      </Route>
    </Routes>
  )
}

export default Router