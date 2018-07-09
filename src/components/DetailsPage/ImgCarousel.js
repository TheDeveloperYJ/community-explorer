import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Carousel  from 'nuka-carousel'


const ImageWrapper = styled.img`
 width:100%;
 height:400px;
 grid-column-start:2;
 grid-column-end:3;
`;

const Grid = styled.div`
width:100%;
 height:400px;
 grid-column-start:1;
 grid-column-end:4;
`
const ImgCarousel = ({image}) => {
        return(
        <Grid>
        <Carousel>
        <ImageWrapper src={image}/>
        <ImageWrapper src={image}/>
        <ImageWrapper src={image}/>
        </Carousel>
        </Grid>
        )
    }



     
ImgCarousel.propTypes = {
    image:PropTypes.string.isRequired
}

export default ImgCarousel;