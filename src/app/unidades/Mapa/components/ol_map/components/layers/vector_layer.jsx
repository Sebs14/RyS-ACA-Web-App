import { useContext, useEffect } from "react";
import MapContext from "../map_container/map_context";
import OLVectorLayer from "ol/layer/Vector";
import { useState } from "react";
const VectorLayer = ({ source, style, zIndex = 0 }) => {
  const { map } = useContext(MapContext);
  const [currentVectorLayer, setCurrentVectorLayer] = useState(null);
  
  useEffect(() => {
    if (!map) return;

    let vectorLayer = new OLVectorLayer({
      source,
      style,
    });

    if (currentVectorLayer) {
      map.removeLayer(currentVectorLayer);
    }

    setCurrentVectorLayer(vectorLayer);
    map.addLayer(vectorLayer);
    vectorLayer.setZIndex(zIndex);

    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
      }
    };
  }, [map, source]);

  return null;
};
export default VectorLayer;
