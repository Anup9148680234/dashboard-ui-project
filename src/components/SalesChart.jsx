import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { ThemeContext } from "./ThemeContext";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import "../css/components/SalesChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartLabels = ["Direct", "Affiliate", "Sponsored", "E-mail"];
const chartValues = [300.56, 135.18, 154.02, 48.96];

const lightColors = ["#1c1c1c", "#baedbd", "#95a4fc", "#b1e3ff"];
const darkColors = ["#c6c7f8", "#baedbd", "#95a4fc", "#b1e3ff"];

const SalesChart = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        data: chartValues,
        backgroundColor: isDarkMode ? darkColors : lightColors,
        borderWidth: 1,                    
        borderColor: isDarkMode ? "#232323" : "#f7f8fa", 
        borderRadius: 50,    
         borderAlign: 'inner',           
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    cutout: "60%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="sales-component" data-theme={theme}>
      <h2 className="sales-title">Total Sales</h2>
      <div className="sales-main-icon">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
      <div className="sales-data-list">
        {chartLabels.map((label, i) => (
          <div className="sales-data-item" key={label}>
            <span
              className="sales-dot"
              style={{
                backgroundColor: isDarkMode ? darkColors[i] : lightColors[i],
              }}
            />
            <span className="sales-data-label" 
              
            >{label}</span>
            <span className="sales-data-value">${chartValues[i].toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesChart;
