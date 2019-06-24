import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import UserItem from './UserItem';

const Users = ({users}) => {
    return (
        <Fragment>
            <h3>Github Profiles</h3>
            {users.map(user => <UserItem user={user} key={user.id} />)}
        </Fragment>
    )
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
}

export default Users

