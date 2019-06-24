import React, {useState} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppBar, Toolbar, Typography, makeStyles, Container} from '@material-ui/core';
import Search from './components/search/Search';
import Users from './components/users/Users';

const useStyles = makeStyles(theme => ({
  root:{
      flexGrow:1
  }
}));

const store = createStore();
const App = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();
  return (
    <Provider store={store}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <i className="fab fa-github"/> GitFinder
          </Typography>
        </Toolbar>
      </AppBar>
      <Container styles={classes.root} maxWidth="sm" >
        <Search />
      </Container>
      <Users users={users}/>
    </Provider>
  );
}

export default App;
