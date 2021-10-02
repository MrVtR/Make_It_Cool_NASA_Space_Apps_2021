import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React, { useState, useRef } from 'react';
import MapGL, {
  GeolocateControl,
  ScaleControl,
  NavigationControl,
} from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from 'deck.gl';
import Geocoder from 'react-map-gl-geocoder';
import './LoadMap.scss';

// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN =
  'pk.eyJ1IjoibXJ2dHIwODAzIiwiYSI6ImNrdTk4YTIzNzA0ZWQyb256MXEzM2t0eXcifQ.lBqGrvTSd93FfA6_wsA1Og';

function LoadMap() {
  const [viewport, setViewport] = useState({
    width: 1000,
    height: 800,
    latitude: 0,
    longitude: 0,
    zoom: 1,
  });
  const [searchResultLayer, setSearchResultsLayer] = useState(null);
  const mapRef = useRef();

  const handleViewportChange = (newViewport) => {
    setViewport({ ...viewport, ...newViewport });
  };

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = (viewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides,
    });
  };

  const handleOnResult = (event) => {
    console.log(event.result);
    setSearchResultsLayer(
      new GeoJsonLayer({
        id: 'search-result',
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10,
      }),
    );
  };

  console.log(viewport);

  return (
    <div className="Map">
      <MapGL
        ref={mapRef}
        {...viewport}
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mrvtr0803/cku9s7jm76sbg17l4by1dklaw"
        mapOptions={{
          customAttribution: '<a href="https://github.com/MrVtR/">© Github</a>',
        }}
      >
        <Geocoder
          mapRef={mapRef}
          onResult={handleOnResult}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-right"
        />
        <DeckGL {...viewport} layers={[searchResultLayer]} />
        <NavigationControl className="nav-control" />
        <GeolocateControl
          className="geolocate-control"
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          label="Find My Location"
        />
        <div className="scale-control">
          <ScaleControl maxWidth={200} unit={'metric'} />
        </div>
      </MapGL>
    </div>
  );
}

export default LoadMap;
