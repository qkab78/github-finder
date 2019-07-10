import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Divider, Card, CardContent, Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '20px',
        marginBottom: '20px',
    }
}));
const Repo = ({ repo }) => {
    const classes = useStyles();
    return (
        <Fragment>
            <Typography>
                <Link href={repo.html_url}>{repo.name}</Link>
            </Typography>
            <Divider />
        </Fragment>
    )
}

Repo.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default Repo
