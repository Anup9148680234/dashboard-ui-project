import  { useContext } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { ThemeContext } from "./ThemeContext";
import "../css/components/MapChart.css";


const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const locations = [
  { city: "New York", value: 72, coords: [-74.006, 40.7128] },
  { city: "San Francisco", value: 39, coords: [-122.4194, 37.7749] },
  { city: "Sydney", value: 25, coords: [151.2093, -33.8688] },
  { city: "Singapore", value: 61, coords: [103.8198, 1.3521] }
];

const MapChart = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <div className="map-component" data-theme={theme}>
      <h2 className="map-title">Revenue by Location</h2>
      <div className="map-map">
        <ComposableMap
          projectionConfig={{ scale: 32 }}
          width={200}
          height={85}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isDarkMode ? "#232a37" : "#E4EEF7"}
                  stroke="#bfc6d1"
                  strokeWidth={0.15}
                />
              ))
            }
          </Geographies>
          {locations.map(loc => (
            <Marker key={loc.city} coordinates={loc.coords}>
              <circle
                r={3.1}
                fill={isDarkMode ? "#fff" : "#1c1c1c"}
                stroke="#A6B4CD"
                strokeWidth={0.65}
              />
            </Marker>
          ))}
        </ComposableMap>
      </div>
      <div className="map-list">
        {locations.map(loc => (
          <div className="map-list-row" key={loc.city}>
            <div className="map-list-city">{loc.city}</div>
            <div className="map-list-value">{loc.value}K</div>
            <div className="map-list-bar-outer">
              <div
                className="map-list-bar-inner"
                style={{ width: `${(loc.value / 72) * 100}%` }} // 72 is max, scale as needed
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapChart;