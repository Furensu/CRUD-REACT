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
  const [toggled,setToggled] = useState(false);
   
  const toggleCreate = () => {
    setToggled(!toggled);
  };
 
  return (
  <Fragment>
    <CssBaseline />
    <AppHeader toggled = {()=>toggleCreate()} />
    <main className={classes.main}>
      {toggled ? <CreateForm toggled = {()=>toggleCreate()}/> : <ItemList/> }
    </main>
  </Fragment>
  );
  }
export default withStyles(styles)(App);