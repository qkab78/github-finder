import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const NavBar = props => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    <i className="fab fa-github" /> GitFinder
          </Typography>
            </Toolbar>
        </AppBar>
    )
}

NavBar.propTypes = {

}

export default NavBar
