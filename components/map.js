import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 52.516150, lng: 13.436420 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 52.516150, lng: 13.436420 }} />}
  </GoogleMap>
))

export default MyMapComponent;