import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getGitProfile } from '../../redux/actions/git-action'


const User = ({ git: { profile }, match, loading, getGitProfile }) => {
    console.log(match.params.username)
    useEffect(() => {
        getGitProfile(match.params.username)
    }, [])
    if (loading || profile === null) {
        return <h4>Loading...</h4>
    }
    return JSON.stringify(profile)
}

User.propTypes = {
    git: PropTypes.object.isRequired,
    profile: PropTypes.object,
    getGitProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    git: state.git
})
export default connect(mapStateToProps, { getGitProfile })(User)

