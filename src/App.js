import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types'
import { makeStyles, Container } from '@material-ui/core';
import { connect } from 'react-redux'
import clsx from 'clsx'

import { searchUsers, clearProfiles } from './redux/actions/git-action'

import Search from './components/search/Search';
import Users from './components/users/Users';
import Alert from './components/layout/Alert';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const App = ({ git, searchUsers, clearProfiles }) => {
  const classes = useStyles();
  const [alert, setAlert] = useState(null)

  const setAnAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 5000);
  }
  console.log(alert)
  return (
    <Fragment>
      <Container styles={classes.root} >
        <Alert alert={alert} />
        <Search setAlert={setAnAlert} searchUsers={searchUsers} clearProfiles={clearProfiles} showClear={git.profiles && git.profiles.length > 0 ? true : false} />
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
