import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({user}) => {
    const {name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable} = user;
    return (
        <div>
            <h3>{name}</h3>
        </div>
    )
}

UserItem.propTypes = {
    loading:PropTypes.bool,
    user:PropTypes.object.isRequired,
    // getUser:PropTypes.func.isRequired,
}

export default UserItem

