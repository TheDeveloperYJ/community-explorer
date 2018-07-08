import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ImageWrapper = styled.img`
 width:100%;
 height:400px;
 grid-column-start:2;
 grid-column-end:3;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Carousel = ({image}) => <ImageWrapper src={image}/>
     
Carousel.propTypes = {
    image:PropTypes.string.isRequired
}

export default Carousel;