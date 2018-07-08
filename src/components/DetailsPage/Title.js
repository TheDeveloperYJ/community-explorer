import React from 'react';
import ProfilePic from '../DetailsPage/ProfilePic'
import Time from '../DetailsPage/Time'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const TitleWrapper = styled.div `
 grid-column-start:2;
 grid-column-end:3;
 height:200px;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 padding-top:20px;
 padding: 10px;
 background: #ecfbec;
`;

const ProfileandTitle = ({title,profile}) => <div style={{display:'flex'}}> 
        <h4>{title} </h4>
        <div style={{marginLeft:'auto'}}><ProfilePic profile={profile}/></div>
</div>

ProfileandTitle.propTypes = {
      title:PropTypes.string.isRequired,
    profile:PropTypes.string.isRequired,
}

 const Title = ({title,profile,time,name}) => {
    return(
        <TitleWrapper>
             <ProfileandTitle title={title} profile={profile}/>
             <Time time={time} name={name}/>
        </TitleWrapper>
    )
}

Title.propTypes = {
    title:PropTypes.string.isRequired,
    profile:PropTypes.string.isRequired,
    time:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
}

export default Title;