import React from 'react';
import {AppBar, Toolbar, Typography, Container, Button} from '@material-ui/core';

const AppHeader = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        My React App
      </Typography>
      <Container align="right">
        <Button variant="contained" color='secondary' >Criar Item</Button>
      </Container>
    </Toolbar>
  </AppBar>
);

export default AppHeader;