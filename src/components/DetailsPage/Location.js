import React from 'react';
import MapView from './MapView';
import Address from './Address';
import PropTypes from 'prop-types'

import styled from 'styled-components'

const MapWrapper = styled.div`
 grid-column-start:2;
 grid-column-end:3;
 margin-top:20px;
 margin-bottom :20px;
 z-index:1;
 box - shadow: 0 4 px 8 px 0 rgba(0, 0, 0, 0.2), 0 6 px 20 px 0 rgba(0, 0, 0, 0.19);
`

const Location = ({lat,lng,location}) => {
    return(
        <MapWrapper>
        <Address location={location}/>
    <MapView
            lat={lat}
            lng={lng}
        isMarkerShown
        googleMapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBRopxE9VlxTs07HlXz2F1Q9hJmXR4OQ28&exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `300px` }} />}
        containerElement={<div style={{ height: `300px` }} />}
        mapElement={<div style={{ height: `300px` }} />}
            />
            </MapWrapper>
  )}

export default Location;

Location.propTypes = {
    location:PropTypes.object.isRequired,
    lat:PropTypes.number.isRequired,
    lng:PropTypes.number.isRequired,
}