import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'

import { Grid, TextField, ButtonBase, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    input: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}))
const Search = ({ searchUsers, clearProfiles, showClear }) => {
    const [text, setText] = useState('')
    const classes = useStyles();
    const onSubmit = e => {
        e.preventDefault();
        searchUsers(text)
        setText('');
    }
    return (
        <Fragment>
            <form className={classes.root} onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField placeholder="Enter a profile name" label="Github name" style={{ marginTop: 8 }} fullWidth margin="normal" value={text} variant="outlined" onChange={e => setText(e.target.value)} InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" component="button" fullWidth style={{ marginBottom: 8 }}>
                            <ButtonBase type="submit" className={classes.button} variant="contained" color="primary" component="button" >
                                Search
                            </ButtonBase>
                        </Button>

                    </Grid>
                </Grid>
            </form>
            {showClear && (<Button onClick={clearProfiles} className={classes.button} variant="contained" color="secondary" component="button" fullWidth>
                Clear
            </Button>)}
        </Fragment>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearProfiles: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
}

export default Search

