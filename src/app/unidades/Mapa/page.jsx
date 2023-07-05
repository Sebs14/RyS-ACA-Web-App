"use client";
import React from "react";
import "./components/page.css";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import GeoPortal from "./components/geoportal/GeoPortal";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box className="">{children}</Box>}
    </div>
  );
}

const page = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [currentFeatures, setCurrentFeatures] = useState(null);
  const [activeLayerName, setActiveLayerName] = useState(null);
  const [activeGeoJsonLayer, setActiveGeoJsonLayer] = useState(null);

  const handleTabChange = (_, newValue) => {
    setCurrentTab(newValue);
  };

  const handleFeaturesChange = (newFeatures) => {
    setCurrentFeatures(newFeatures);
  };

  const handleActiveLayerNameChange = (newActiveLayerName) => {
    setActiveLayerName(newActiveLayerName);
  };

  const handleActiveGeoJsonLayerChange = (newActiveGeoJsonLayer) => {
    setActiveGeoJsonLayer(newActiveGeoJsonLayer);
  };

  return (
    <div className="block w-screen h-screen">
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className="w-full bg-slate-50"
      >
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab label=" Tracking de cargamento " />
        </Tabs>
      </Box>
      <TabPanel value={currentTab} index={0}>
        <div className="block">
          <GeoPortal
            onFeaturesChange={handleFeaturesChange}
            activeFeatures={currentFeatures}
            onActiveLayerNameChange={handleActiveLayerNameChange}
            activeLayerName={activeLayerName}
            onActiveGeoJsonLayerChange={handleActiveGeoJsonLayerChange}
            activeGeoJsonLayer={activeGeoJsonLayer}
          />
        </div>
      </TabPanel>
    </div>
  );
};

export default page;
