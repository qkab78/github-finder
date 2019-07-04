import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, makeStyles, Container } from '@material-ui/core';
import UserItem from './UserItem';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

const Users = ({ profiles, loading }) => {
    const classes = useStyles();
    if (loading) {
        return <h4>Loading...</h4>
    }
    return (
        <Container>
            <Grid container direction="row" justify="center" alignItems="center" spacing={3} className={classes.root}>
                {!loading && profiles ? profiles.map(user => <UserItem user={user} key={user.id} />) : null}
            </Grid>
        </Container>
    )
}

Users.propTypes = {
    profiles: PropTypes.array,
}
export default Users

