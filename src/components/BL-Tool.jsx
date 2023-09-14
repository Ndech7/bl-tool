import React, { useState, useEffect, useRef } from "react";
import "./blTool.css";
// import {
//   LayersControl,
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
// } from "react-leaflet";
import L from "leaflet";
import points from "../assets/data/ground_truth.json";
// import { photos } from "../assets/data/ground_truth_with_photos";
// import GeoRasterLayer from "georaster-layer-for-leaflet";
// import parseGeoraster from "georaster";

const BlTool = () => {
  // const [map, setMap] = useState(null);
  const map_container_ref = useRef(null);

  // load map on component mount
  useEffect(() => {
    const map_instance = displayMap();

    // clean up
    return () => {
      if (map_instance._loaded) {
        map_instance.remove();
      }
    };
  }, []);

  // display the map
  const displayMap = () => {
    const id = map_container_ref.current.id;
    const lat = -1.33;
    const lon = 36.87;
    const zoom = 11;
    const tile = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attribution = "&copy: OpenStreetMap";

    const map = L.map(id).setView([lat, lon], zoom);
    L.tileLayer(tile, {
      attribution: attribution,
    }).addTo(map);

    // display points
    points.features.map((point) => {
      return L.geoJSON(point, {
        onEachFeature: (feature, layer) => {
          layer.bindPopup(
            `<div>
              <h4>${point.properties.name}</h4>
              <p>
                <b>Locality: </b>
                ${point.properties.location}
              </p>
              <p>
                <b>Photo Orientation: </b>
                ${point.properties.orientation}
              </p>
              <p>
                <b>Land-Use Class: </b>
                ${point.properties.class}
              </p>
            </div>`
          );
          // layer.addEventListener("click");
        },
      }).addTo(map);
    });

    // adding a legend to the map
    const legend = L.control({
      position: "bottomleft",
    });
    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      div.innerHTML = `<h4>Legend</h4><img src="" className="img"/>`;

      return div;
    };
    legend.addTo(map);

    return map;
  };

  return (
    <>
      <div className="instructions">
        <h4>Instructions</h4>
        <ul>
          <li>
            On the map top right corner, Select sensor - Modis, Landsat,
            Sentinel, Planet
          </li>
          <br />
          <li>
            Analyze imagery and try to ascertain the land use/land cover of the
            area
          </li>
          <br />
          <li>
            Click on the placemarks to compare your analysis to the photos taken
          </li>
          <br />
          <li>Repeat steps with the other sensors</li>
        </ul>
      </div>
      {/* <MapContainer
        center={INITIAL_MAP_CONFIG.center}
        zoom={INITIAL_MAP_CONFIG.zoom}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.features.map((point, index) => {
          return (
            <Marker
              key={index}
              id={point.id}
              position={[
                point.geometry.coordinates[1],
                point.geometry.coordinates[0],
              ]}
            >
              <Popup>
                <h4>{point.properties.name}</h4>
                <p>
                  <b>Locality: </b>
                  {point.properties.location}
                </p>
                <p>
                  <b>Photo Orientation: </b>
                  {point.properties.orientation}
                </p>
                <p>
                  <b>Land-Use Class: </b>
                  {point.properties.class}
                </p>
              </Popup>
            </Marker>
          );
        })}
        <Legend map={map} />
      </MapContainer> */}
      <div id="map_container" ref={map_container_ref}></div>
    </>
  );
};

export default BlTool;
