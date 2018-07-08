import React from 'react';
import PropTypes from 'prop-types'

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps"
 const MapView = withScriptjs(withGoogleMap(({
                lat,
                lng,
                isMarkerShown
            }) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: lat, lng: lng}}
  >
    {isMarkerShown && <Marker position={{ lat: lat, lng: lng }} />}
  </GoogleMap>
))


MapView.propTypes = {
  lat:PropTypes.number.isRequired,
  lng:PropTypes.number.isRequired,
  isMarkerShown:PropTypes.bool.isRequired,
}

export default MapView;