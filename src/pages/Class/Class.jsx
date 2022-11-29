import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, SubmitButton } from '../../ui/Buttons.style'
import { FlexLinks } from '../../ui/Flex.style'
import { Main, Title, TextBody, TextBodySecond, TextBodyThird } from '../../ui/index'



const Class = () => {

  const navigate = useNavigate()
  return (
    <Main>
      <Title>Class & Pseudo Class</Title>
      <TextBody className='text__body--p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis repudiandae soluta quo aperiam ratione sapiente cum odit itaque doloribus eius.</TextBody>
      <TextBodySecond>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis repudiandae soluta quo aperiam ratione sapiente cum odit itaque doloribus eius.</TextBodySecond>
      <TextBodyThird>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis repudiandae soluta quo aperiam ratione sapiente cum odit itaque doloribus eius.</TextBodyThird>
      <FlexLinks>
        {/* //! With this property used in navigate we go back to previous page */ }
        <Button onClick={() => navigate(-1)}>Back</Button>
        <SubmitButton as={Link} to='/animation'>Next page</SubmitButton>
      </FlexLinks>

    </Main>
  )
}

export default Class