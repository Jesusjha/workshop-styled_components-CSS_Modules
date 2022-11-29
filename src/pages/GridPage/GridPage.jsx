import React from 'react'
import { Grid, Menu, Sidebar, Content, Footer } from '../../ui/Grid.style'
import { Button, SubmitButton } from '../../ui/Buttons.style';
import { Link, useNavigate } from 'react-router-dom';


const GridPage = () => {

  const navigate = useNavigate()

  return (
      <Grid>
        <Menu>Top menu</Menu>
        <Sidebar>
          <p>Sidebar</p>
          <Button onClick={() => navigate(-1)}>Back</Button>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </Sidebar>
        <Content>Body</Content>
        <Footer>Footer</Footer>
      </Grid>
  )
}

export default GridPage