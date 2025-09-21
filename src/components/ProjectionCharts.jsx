import React, { useContext } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { ThemeContext } from "./ThemeContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";

import "../css/components/ProjectionCharts.css";

const projectionData = [
  { name: "Jan", actual: 18000000, projected: 23000000 },
  { name: "Feb", actual: 21000000, projected: 26000000 },
  { name: "Mar", actual: 17000000, projected: 22000000 },
  { name: "Apr", actual: 23000000, projected: 28000000 },
  { name: "May", actual: 15000000, projected: 20000000 },
  { name: "Jun", actual: 21000000, projected: 26000000 },
];

function formatYAxis(tick) {
  return `${tick / 1000000}M`;
}

function ProjectionCharts() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "light" ? false : true;

  const colors = {
    projected: isDark ? "#687681" : "#d0dfeb",
    actual: isDark ? "#a8c5da" : "#a8c5da",
    grid: isDark ? "rgba(255,255,255,0.1)" : "#d9e2ec",
    axis: isDark ? "#bbb" : "#6c6e7e",
    background: isDark ? "#1e1e1e" : "#f7f9fb",
  };

  return (
    <Paper
      elevation={0}
      className="chart-paper"
      sx={{ backgroundColor: colors.background }}
    >
      <Typography
        variant="subtitle1"
        className="chart-title"
        sx={{ color: colors.axis }}
      >
        Projections vs Actuals
      </Typography>
      <Box className="chart-container" sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={projectionData} barGap={-20}>
 
            <Tooltip
              formatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              contentStyle={{
                backgroundColor: isDark ? "#333" : "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "8px",
              }}
              itemStyle={{
                color: isDark ? "#fff" : "#000",
              }}
              labelStyle={{
                color: isDark ? "#ccc" : "#555",
                fontWeight: 500,
              }}
            />

            <CartesianGrid vertical={false} stroke={colors.grid} />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: colors.axis, dy: 8 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxis}
              tick={{ fontSize: 13, fill: colors.axis }}
              domain={[0, 30000000]}
              ticks={[0, 10000000, 20000000, 30000000]}
            />

 
            <Bar
              dataKey="projected"
              fill={colors.projected}
              radius={[4, 4, 0, 0]}
              barSize={20}
              animationDuration={800}
            ></Bar>


            <Bar
              dataKey="actual"
              fill={colors.actual}
              radius={[0, 0, 0, 0]}
              barSize={20}
              animationDuration={800}
            ></Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}

export default ProjectionCharts;
