import React, {useContext} from "react";
import { ThemeContext } from "./ThemeContext";
import { Line } from "react-chartjs-2";
import "../css/components/RevenueChart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const getChartData = (isDarkMode) => ({
  labels,
  datasets: [
    {
      label: "Current Week",
      data: [15, 10, 11, 18, 20, 20.5],
      borderColor: isDarkMode ? "#fff" : "#222",
      backgroundColor: isDarkMode ? "rgba(50,50,50,0.12)" : "rgba(34,34,34,0.03)",
      tension: 0.4,  
      pointRadius: 0, 
      borderWidth: 4,
      fill: false,
    },
    {
      label: "Previous Week",
      data: [10, 18, 16, 13, 15, 23],
      borderColor: "#8CB4E2",
      backgroundColor: "rgba(140,180,226,0.12)",
      tension: 0.4,   
      pointRadius: 0, 
      borderWidth: 4,
      fill: false,
    }
  ]
});

const getChartOptions = (isDarkMode) => ({
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: isDarkMode ? "#222" : "#fff",
      titleColor: isDarkMode ? "#fff" : "#222",
      bodyColor: isDarkMode ? "#fff" : "#222",
      borderColor: isDarkMode ? "#8CB4E2" : "#222",
      borderWidth: 1,
    }
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: isDarkMode ? "#aaa" : "#999" }
    },
    y: {
      grid: { color: isDarkMode ? "#333" : "#eee" },
      ticks: {
        callback: v => `${v}M`,
        color: isDarkMode ? "#aaa" : "#999",
        stepSize: 10 ,
      },
      beginAtZero: true,
      max: 30
    }
  }
});

const RevenueChart = () => {

  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "light" ? false : true;


return (
  <div
    className="graph-component"
    style={{
    width: 662,
    background: isDarkMode ? "#18181b" : "#fff",
    padding: 24,
    borderRadius: 12,
    color: isDarkMode ? "#fff" : "#222"
  }}
  >
    <div className="graph-header" style={{ marginBottom: 16 }}>
      <h2
        className="graph-title"
        style={{
          fontWeight: 700,
          fontSize: 16,
          color: isDarkMode ? "#fff" : "#222"
        }}
      >
        Revenue
      </h2>
      <div
        className="week-labels"
        style={{
          display: "flex",
          gap: 22,
          alignItems: "center",
          marginTop: 10
        }}
      >
        <span
          className="label-dot current-week-dot"
          style={{
            display: "inline-block",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: isDarkMode ? "#fff" : "#222",
            marginRight: -15
          }}
        />
        <span
          className="current-week"
          style={{
            fontSize: 13,
            color: isDarkMode ? "#fff" : "#222"
          }}
        >
          Current Week <strong>$58,211</strong>
        </span>
        <span
          className="label-dot previous-week-dot"
          style={{
            display: "inline-block",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#8CB4E2",
            marginLeft: 5,
            marginRight: -15
          }}
        />
        <span
          className="previous-week"
          style={{
            fontSize: 13,
            color: isDarkMode ? "#fff" : "#222"
          }}
        >
          Previous Week <strong>$68,768</strong>
        </span>
      </div>
    </div>
    <Line data={getChartData(isDarkMode)} options={getChartOptions(isDarkMode)} height={200} width={662} />
  </div>
);
}
export default RevenueChart;
