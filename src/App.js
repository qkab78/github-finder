import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, makeStyles, Container } from '@material-ui/core';
import { connect } from 'react-redux'

import { searchUsers, clearProfiles } from './redux/actions/git-action'

import Search from './components/search/Search';
import Users from './components/users/Users';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const App = ({ git, searchUsers, clearProfiles }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <i className="fab fa-github" /> GitFinder
          </Typography>
        </Toolbar>
      </AppBar>
      <Container styles={classes.root} maxWidth="sm" >
        <Search searchUsers={searchUsers} clearProfiles={clearProfiles} showClear={git.profiles && git.profiles.length > 0 ? true : false} />
      </Container>
      <Users profiles={git.profiles} loading={git.loading} />
    </Fragment>
  );
}

App.propTypes = {
  git: PropTypes.object.isRequired,
  searchUsers: PropTypes.func.isRequired,
  clearProfiles: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  git: state.git
})
export default connect(mapStateToProps, { searchUsers, clearProfiles })(App);
