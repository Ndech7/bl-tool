import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import points from "../assets/data/ground_truth.json";
import "./blTool.css";

const Bl = () => {
  const map_container_ref = useRef(null);
  const [map, setMap] = useState(null);
  const [basemap, setBasemap] = useState("OpenStreetMap");

  useEffect(() => {
    const map_instance = displayMap();
    setMap(map_instance);

    return () => {
      if (map_instance._loaded) {
        map_instance.remove();
      }
    };
  }, []);

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

  const handleBasemapChange = (event) => {
    const newBasemap = event.target.value;
    setBasemap(newBasemap);

    // Remove the current basemap layer
    map.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        map.removeLayer(layer);
      }
    });

    // Add the selected basemap layer
    const newTileLayer = L.tileLayer(basemapTileUrls[newBasemap], {
      attribution: basemapAttributions[newBasemap],
    });
    newTileLayer.addTo(map);
  };

  const basemapTileUrls = {
    OpenStreetMap: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    CartoDBPositron: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    EsriWorldImagery: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    Ruaka_Planet: "http://194.163.165.107:4080/geoserver/BL/wms?service=WMS&version=1.1.0&request=GetMap&layers=BL%3Aruaka_planet&bbox=36.735598320360715%2C-1.246258771859128%2C36.83820677953091%2C-1.1823303961104268&width=768&height=478&srs=EPSG%3A4326&styles=&format=application/openlayers",
    Kitengela: "http://194.163.165.107:4080/geoserver/BL/wms?service=WMS&version=1.1.0&request=GetMap&layers=BL%3AKitengela&bbox=36.88133006127255%2C-1.5791208338168545%2C36.97964036874544%2C-1.457782296461282&width=622&height=768&srs=EPSG%3A4326&styles=&format=application/openlayers",
    // Add more basemap URLs as needed
  };

  const basemapAttributions = {
    OpenStreetMap: "&copy; OpenStreetMap contributors",
    CartoDBPositron: "&copy; CartoDB",
    EsriWorldImagery: "&copy; Esri",
    Ruaka_Planet: "&copy; Ruaka",
    Kitengela: "&copy; Kitengela",
    // Add more attributions as needed
    };
    
    

  return (
    <>
      <div className="basemap-selector">
        <label>
          Basemap:
          <select value={basemap} onChange={handleBasemapChange}>
            {Object.keys(basemapTileUrls).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </label>
      </div>
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

export default Bl;
