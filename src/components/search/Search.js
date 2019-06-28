import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, AppBar, Toolbar, Typography, TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
    },
    input: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}))
const Search = props => {
    const classes = useStyles();
    return (
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField placeholder="Enter a profile name" label="Github name" style={{ marginTop: 8 }} fullWidth margin="normal" variant="outlined" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.button} variant="contained" fullWidth color="primary" >
                        Search
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

Search.propTypes = {

}

export default Search

