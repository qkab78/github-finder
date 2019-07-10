import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Grid, TextField, ButtonBase, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    container: {
        marginTop: '20px',
        marginBottom: '20px',
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
const Search = ({ searchUsers, clearProfiles, showClear, setAlert }) => {
    const [text, setText] = useState('')
    const classes = useStyles();
    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'light')
        } else {
            searchUsers(text)
            setText('');
        }
    }
    return (
        <Fragment>
            <form className={clsx(classes.root, classes.container)} onSubmit={onSubmit}>
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
                {showClear && (<Button onClick={clearProfiles} className={classes.button} variant="contained" color="secondary" component="button" fullWidth>
                    Clear
            </Button>)}
            </form>
        </Fragment>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearProfiles: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default Search

