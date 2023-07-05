import React, { useState } from "react";
import "./ol_map.css";
import Map from "./components/map_container/map_container";
import Layers from "./components/layers/layers";
import TileLayer from "./components/layers/tile_layer";
import VectorLayer from "./components/layers/vector_layer";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import { osm, vector } from "./Source";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import Controls from "./components/controls/controls";
import FullScreenControl from "./components/controls/full_screen_control";
import { useEffect } from "react";

let styles = {
  style: new Style({
    image: new CircleStyle({
      radius: 6,
      fill: new Fill({ color: "red" }),
    }),
  }),
};

export default function OlMap({ features, mapSource, selectedGeoJsonLayer }) {
  const [center, setCenter] = useState([-88.85, 13.6984]);
  const [zoom, setZoom] = useState(9);
  const [geoJsonObject, setGeoJsonObject] = useState(null);
  const [currentMapSource, setCurrentMapSource] = useState(null);

  useEffect(() => {
    setGeoJsonObject(null);
    setGeoJsonObject(selectedGeoJsonLayer);
  }, [selectedGeoJsonLayer]);

  useEffect(() => {
    setCurrentMapSource(mapSource);
  }, [mapSource]);

  console.log("pitudo",geoJsonObject)

  return (
    <div className="bg-white h-full w-full">
      <Map center={fromLonLat(center)} zoom={zoom}>
        <Layers>
          <TileLayer source={currentMapSource} zIndex={0} />
          {geoJsonObject && (
            <VectorLayer
              source={vector({
                features: new GeoJSON().readFeatures(geoJsonObject, {
                  featureProjection: get("EPSG:3857"),
                }),
              })}
              style={styles.style}
              zIndex={1}
            />
          )}
        </Layers>
        <Controls>
          <FullScreenControl />
        </Controls>
      </Map>
    </div>
  );
}
