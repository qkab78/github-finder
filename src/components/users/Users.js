import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, makeStyles, Container } from '@material-ui/core';
import UserItem from './UserItem';
import { getGitProfiles } from '../../redux/actions/git-action';

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

const Users = ({ git: { profiles, loading }, getGitProfiles }) => {
    // const [users, setUsers] = useState([]);
    // const getProfiles = () => getGitProfiles();
    useEffect(() => {
        getGitProfiles();
    }, []);
    const classes = useStyles();
    if (loading || profiles === null) {
        return <h4>Loading...</h4>
    }
    return (
        <Container>
            <h3>Github Profiles</h3>
            <Grid container direction="row" justify="center" alignItems="center" spacing={3} className={classes.root}>
                {!loading && profiles.length === 0 ? (
                    <p>No profiles...</p>
                ) : profiles.map(user => <UserItem user={user} key={user.id} />)}
            </Grid>
        </Container>
    )
}

Users.propTypes = {
    git: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    git: state.git
});
export default connect(mapStateToProps, { getGitProfiles })(Users)

