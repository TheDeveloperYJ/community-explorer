import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'


const DescriptionWrapper = styled.div`
grid-column-start:2;
grid-column-end:3;
font-size:17px;
white-space: pre-wrap;
word-wrap: break-word;
padding-top:15px;
margin-top:10px;
border-left: 3px solid #1bd42ade;
padding-left:10px;
font-weight:400;
`

 const Description = ({desc}) => {
    return(
        <DescriptionWrapper>
       {desc}
        </DescriptionWrapper>
    )
}

Description.propTypes = {
    desc:PropTypes.string.isRequired
}

export default Description;