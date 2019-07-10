import React from 'react'
import Typography from '@material-ui/core/Typography/Typography';
import Container from '@material-ui/core/Container/Container';

const NotFound = props => {
    return (
        <Container>
            <Typography variant="h1" component="h1">
                Not Found
            </Typography>
            <Typography variant="p" component="p">
                This page does not exists.
            </Typography>
        </Container>
    )
}

export default NotFound
