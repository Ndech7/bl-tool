import React, { useEffect } from "react";
import L from "leaflet";

const Legend = ({ map }) => {
  console.log(map);
  useEffect(() => {
    if (map) {
      const legend = L.control({ position: "bottomleft" });
      legend.onAdd = () => {
        let div = L.DomUtil.create("div", "info legend");
        div.innerHTML = "<h4>legend</h4>";
        return div;
      };
      legend.addTo(map);
    }
  }, [map]);

  return null;
};

export default Legend;
