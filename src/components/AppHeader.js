import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, Container, Button} from '@material-ui/core';

const AppHeader = ({toggled}) => {
  const [bntState,setBtnState] =useState(false);
  const btnClick =(toggled) => {
    setBtnState(!bntState);
    toggled();
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          My React App
        </Typography>
        <Container align="right">
          <Button variant="contained" color='secondary' onClick={()=>{btnClick(toggled)}} >{bntState ? "Listar itens":"Criar Item"}</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;