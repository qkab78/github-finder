import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const UserItem = ({ user }) => {
    const classes = useStyles();
    const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = user;
    return (
        <Grid item xs>
            <Card className={classes.card} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={avatar_url}
                        title={login}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {login}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {bio}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                </Button>
                    <Button size="small" color="primary">
                        Learn More
                </Button>
                </CardActions>
                {/* <h3>{login}</h3> */}
            </Card>
        </Grid>
    )
}

UserItem.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
}

export default UserItem

