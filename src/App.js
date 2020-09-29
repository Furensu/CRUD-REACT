import React, { Fragment, useState } from 'react';
import {  CssBaseline,  withStyles,} from '@material-ui/core';

import AppHeader from './components/AppHeader';
import ItemList from './components/ItemList';
import CreateForm from './components/CreateForm';


const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: { padding: theme.spacing(2),},
  },
});


const App = ({ classes }) => {

  const [toggleCreate,setToggleCreate] = useState(false);
  
  const createSwitch = () => {
    setToggleCreate(!toggleCreate);
  };
   
  return (
  <Fragment>
    <CssBaseline />
    <AppHeader toggled = {()=>createSwitch()} />
    <main className={classes.main}>
      {toggleCreate ? <CreateForm toggled = {()=>createSwitch()}/> : <ItemList/> }
    </main>
  </Fragment>
  );
  }
export default withStyles(styles)(App);