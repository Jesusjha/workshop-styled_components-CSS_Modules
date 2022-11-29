import React from 'react'
import TopTitle from '../components/TopTitle/TopTitle'
import Home from '../pages/Home/Home'
import Class from '../pages/Class/Class'

import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<TopTitle />}>
      <Route index element={<Home />} />
      <Route path='class' element={<Class />} />
      </Route>
    </Routes>
  )
}

export default Router