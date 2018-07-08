import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ProfileWrapper = styled.img`
  width:60px;
  height:60px;
  border-radius:100%;
`;


const ProfilePic = ({profile}) => <ProfileWrapper src={profile}/>

ProfilePic.propTypes = {
  profile:PropTypes.string.isRequired
}
export default ProfilePic;