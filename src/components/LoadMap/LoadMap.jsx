import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './LoadMap.scss';

mapboxgl.accessToken =
  'pk.eyJ1IjoibXJ2dHIwODAzIiwiYSI6ImNrdTk4YTIzNzA0ZWQyb256MXEzM2t0eXcifQ.lBqGrvTSd93FfA6_wsA1Og';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(45);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mrvtr0803/cku9s7jm76sbg17l4by1dklaw',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
    map.current.on('load', () => {
      // Add a geojson point source.
      // Heatmap layers also work with a vector tile source.
      map.current.resize();
      const scale = new mapboxgl.ScaleControl({
        maxWidth: 200,
        unit: 'imperial',
      });
      map.current.addControl(scale);
      map.current.addControl(new mapboxgl.NavigationControl());
      map.current.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          // When active the map will receive updates to the device's location as it changes.
          trackUserLocation: true,
          // Draw an arrow next to the location dot to indicate which direction the device is heading.
          showUserHeading: true,
        }),
      );
      map.current.addSource('disasters', {
        type: 'geojson',
        data: null,
      });

      map.current.addLayer(
        {
          id: 'disasters-heat',
          type: 'heatmap',
          source: 'disasters',
          maxzoom: 9,
          paint: {
            // Increase the heatmap weight based on frequency and property magnitude
            'heatmap-weight': [
              'interpolate',
              ['linear'],
              ['get', 'mag'],
              0,
              0,
              6,
              1,
            ],
            // Increase the heatmap color weight weight by zoom level
            // heatmap-intensity is a multiplier on top of heatmap-weight
            'heatmap-intensity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0,
              1,
              9,
              3,
            ],
            // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
            // Begin color ramp at 0-stop with a 0-transparancy color
            // to create a blur-like effect.
            'heatmap-color': [
              'interpolate',
              ['linear'],
              ['heatmap-density'],
              0,
              'rgba(33,102,172,0)',
              0.2,
              'rgb(202,255,212)',
              0.4,
              'rgb(0,100,0)',
              0.6,
              'rgb(238,238,0)',
              0.8,
              'rgb(255,255,0)',
              1,
              'rgb(139,37,0)',
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0,
              2,
              9,
              20,
            ],
            // Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7,
              1,
              9,
              0,
            ],
          },
        },
        'waterway-label',
      );

      map.current.addLayer(
        {
          id: 'disasters-point',
          type: 'circle',
          source: 'disasters',
          minzoom: 7,
          paint: {
            // Size circle radius by earthquake magnitude and zoom level
            'circle-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7,
              ['interpolate', ['linear'], ['get', 'mag'], 1, 1, 6, 4],
              16,
              ['interpolate', ['linear'], ['get', 'mag'], 1, 5, 6, 50],
            ],
            // Color circle by earthquake magnitude
            'circle-color': [
              'interpolate',
              ['linear'],
              ['get', 'mag'],
              1,
              'rgba(33,102,172,0)',
              2,
              'rgb(202,255,212)',
              3,
              'rgb(0,100,0)',
              4,
              'rgb(238,238,0)',
              5,
              'rgb(255,255,0)',
              6,
              'rgb(139,37,0)',
            ],
            'circle-stroke-color': 'white',
            'circle-stroke-width': 1,
            // Transition from heatmap to circle layer by zoom level
            'circle-opacity': ['interpolate', ['linear'], ['zoom'], 7, 0, 8, 1],
          },
        },
        'waterway-label',
      );
    });
  });

  return (
    <div className="map">
      <h1 className="warning">
        Click in one button below and wait a moment to check the map filters
      </h1>
      <div className="buttons">
        <button
          onClick={() => {
            map.current
              .getSource('disasters')
              .setData(
                'https://eonet.sci.gsfc.nasa.gov/api/v3/events/geojson?status=all&category=wildfires',
              );
          }}
        >
          Wildfires
        </button>
        <button
          onClick={() => {
            map.current
              .getSource('disasters')
              .setData(
                'https://eonet.sci.gsfc.nasa.gov/api/v3/events/geojson?status=all&category=waterCOlor',
              );
          }}
        >
          Water Color
        </button>
        <button
          onClick={() => {
            map.current
              .getSource('disasters')
              .setData(
                'https://eonet.sci.gsfc.nasa.gov/api/v3/events/geojson?status=all&category=tempExtremes',
              );
          }}
        >
          Temperature Extremes
        </button>
        <button
          onClick={() => {
            map.current
              .getSource('disasters')
              .setData(
                'https://eonet.sci.gsfc.nasa.gov/api/v3/events/geojson?status=all&category=dustHaze',
              );
          }}
        >
          Dust and Haze
        </button>
        <button
          onClick={() => {
            map.current
              .getSource('disasters')
              .setData(
                'https://eonet.sci.gsfc.nasa.gov/api/v3/events/geojson?status=all&category=drought',
              );
          }}
        >
          Drought
        </button>
        <button
          onClick={() => {
            map.current
              .getSource('disasters')
              .setData(
                'https://eonet.sci.gsfc.nasa.gov/api/v3/events/geojson?status=all&category=manmade',
              );
          }}
        >
          Man Made
        </button>
        <button
          onClick={() => {
            map.current
              .getSource('disasters')
              .setData(
                'https://eonet.sci.gsfc.nasa.gov/api/v3/events/geojson?status=all&limit=1000&category=severeStorms',
              );
          }}
        >
          Severe Storms
        </button>
        <button
          onClick={() => {
            map.current
              .getSource('disasters')
              .setData(
                'https://eonet.sci.gsfc.nasa.gov/api/v3/events/geojson?status=all&category=floods',
              );
          }}
        >
          Floods
        </button>
        <button
          onClick={() => {
            map.current.getSource('disasters').setData({
              type: 'FeatureCollection',
              features: [],
            });
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="bar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
}
