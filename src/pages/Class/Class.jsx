import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Class.module.css'


const Class = () => {

  const navigate = useNavigate()

  return (
    <>
    <h1 className={style.Title}>Class</h1>
    <button onClick={() => navigate(-1)}>Back</button>
    </>
  )
}

export default Class