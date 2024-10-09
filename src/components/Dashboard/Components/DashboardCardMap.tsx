"use client";
import React, { useEffect } from 'react';
import jsVectorMap from 'jsvectormap';
import "jsvectormap/dist/jsvectormap.css";
import "../../../js/us-aea-en"
import "../../../js/world";
const MapOne: React.FC = () => {

  useEffect(() => {
    const mapOne = new jsVectorMap({
      selector: "#mapOne",
      map: "world",
      zoomButtons: true,
      
      regionStyle: {
        initial: {
          fill: "#C8D0D8",
        },
        hover: {
          fillOpacity: 1,
          fill: "#3056D3",
        },
      },
      regionLableStyle: {
        initial: {
          fontFamily: "Satoshi",
          fontWeight: "semibold",
          fill: "#fff",
        },
        hover: {
          cursor: "pointer",
        },
      },

      labels: {
        regions: {
          render(code: string) {
            return code.split("-")[1];
          },
        },
      },
    });

    return () => {
      const map = document.getElementById("mapOne");
      if (map) {
        map.innerHTML = "";
      }
    };
  }, [])

  return (
    <div>MapOne</div>
  )
}

export default MapOne