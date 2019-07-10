import React, { Fragment, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import clsx from 'clsx'
import { getGitProfile, getGitRepos } from '../../redux/actions/git-action'
import { Card, CardHeader, CardContent, Container, Typography, Grid, Avatar, Link, makeStyles } from '@material-ui/core';
import Repos from '../repos/Repos';
import Chip from '@material-ui/core/Chip/Chip';
import Button from '@material-ui/core/Button/Button';

const useStyles = makeStyles(theme => ({
    gridItem: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    cardHeader: {
        flexGrow: 1,
        backgroundColor: '#FFC05C',
        color: 'white'
    },
    avatar: {
        width: '100px',
        height: '100px',
        margin: 'auto'
    },
    text: {
        textAlign: 'center'
    },
    chipContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexFlow: 'row wrap'
        }
    },
    chip: {
        marginLeft: '5px',
        marginRight: '5px',
        marginTop: '5px',
        marginBottom: '5px',
        width: '200px',
    },
    chipPrimary: { backgroundColor: '#B24FAE', color: 'white' },
    chipSecondary: { backgroundColor: '#F65D91', color: 'white' },
    chipLight: { backgroundColor: '#F0EDFF' },
    chipDark: { backgroundColor: '##464555' },
}));

const User = ({ git: { profile, repos }, match, loading, getGitProfile, getGitRepos }) => {
    const classes = useStyles();
    useEffect(() => {
        getGitProfile(match.params.username)
        getGitRepos(match.params.username)
    }, [])
    if (loading || profile === null) {
        return <h4>Loading...</h4>
    }
    const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = profile;
    return (
        <Fragment>
            <Container>
                <Button className={classes.gridItem}><RouterLink to='/'>Back to Search</RouterLink></Button>
                <Card className={classes.gridItem}>
                    <CardHeader className={classes.cardHeader} title={<Typography variant="h2" component="h2">{login}</Typography>} />
                    <CardContent>
                        <Grid container item xs={12}>
                            <Grid item xs={12} sm={bio ? 6 : 12}>
                                <Avatar className={classes.avatar} src={avatar_url} />
                                <Typography className={classes.text} variant="h5" component="h5">
                                    <Link href={html_url}>{name}</Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {bio && <Fragment>
                                    <Typography className={classes.text} variant="h5" component="h5">
                                        Bio
                                </Typography>
                                    <Typography className={classes.text} variant="p" component="p">
                                        {bio}
                                    </Typography>
                                </Fragment>}
                                {location && <Typography className={classes.text} variant="h5" component="h5">
                                    Location: {location}
                                </Typography>}
                                {blog && <Typography className={classes.text} variant="h5" component="h5">
                                    Website: {blog}
                                </Typography>}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <Card className={classes.gridItem}>
                    <CardContent className={classes.chipContent}>
                        <Chip className={clsx(classes.chip, classes.chipPrimary)} label={<Fragment><Typography variant="h6" component="h6">
                            Followers: {followers}</Typography></Fragment>} />
                        <Chip className={clsx(classes.chip, classes.chipSecondary)} label={<Fragment><Typography variant="h6" component="h6">
                            Following: {following}</Typography></Fragment>} />
                        <Chip className={clsx(classes.chip, classes.chipLight)} label={<Fragment><Typography variant="h6" component="h6">
                            Public Repos: {public_repos}</Typography></Fragment>} />
                        <Chip className={clsx(classes.chip, classes.chipDark)} label={<Fragment><Typography variant="h6" component="h6">
                            Public Gists: {public_gists}</Typography></Fragment>} />
                    </CardContent>

                </Card>
                {repos &&
                    <Card className={classes.gridItem}>
                        <CardHeader className={classes.cardHeader} title={<Typography variant="h2" component="h2">Profile Repos</Typography>} />
                        <CardContent>
                            <Repos repos={repos} />
                        </CardContent>
                    </Card>
                }
            </Container>
        </Fragment>
    )
}

User.propTypes = {
    git: PropTypes.object.isRequired,
    profile: PropTypes.object,
    getGitProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    git: state.git
})
export default connect(mapStateToProps, { getGitProfile, getGitRepos })(User)

