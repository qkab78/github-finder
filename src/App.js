import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types'
import store from './redux/store'
import { AppBar, Toolbar, Typography, makeStyles, Container } from '@material-ui/core';
import Search from './components/search/Search';
import Users from './components/users/Users';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const App = ({ git }) => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <i className="fab fa-github" /> GitFinder
          </Typography>
        </Toolbar>
      </AppBar>
      <Container styles={classes.root} maxWidth="sm" >
        <Search />
      </Container>
      <Users />
    </Provider>
  );
}

export default App;
