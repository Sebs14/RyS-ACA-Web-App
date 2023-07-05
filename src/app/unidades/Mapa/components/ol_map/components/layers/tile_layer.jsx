import { useContext, useEffect } from "react";
import MapContext from "./../map_container/map_context";
import OLTileLayer from "ol/layer/Tile";
import { useState } from "react";
const TileLayer = ({ source, zIndex = 0 }) => {
  const { map } = useContext(MapContext);
  const [currentTileLayer, setCurrentTileLayer] = useState(null);

  useEffect(() => {
    if (!map) return;

    let tileLayer = new OLTileLayer({
      source,
      zIndex,
    });

    if (currentTileLayer) {
      map.removeLayer(currentTileLayer);
    }
    setCurrentTileLayer(tileLayer);

    map.addLayer(tileLayer);
    tileLayer.setZIndex(zIndex);

    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map, source]);

  return null;
};
export default TileLayer;
