import React from 'react';
import PropTypes from 'prop-types'

const Address = ({location}) => <p>Location : {location.address}, {location.city}</p>

Address.propTypes = {
    location:PropTypes.shape({
        address:PropTypes.string.isRequired,
        city:PropTypes.string.isRequired
    }).isRequired
}

export default Address;