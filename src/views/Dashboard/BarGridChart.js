import React from "react";
import { withTheme } from "styled-components";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const BarGridChart = ({ chartData, dataKey, dataKey1,dataKeyLabel,dataKeyLabel1 }) => {
  return (
    <ResponsiveContainer>
      <BarChart
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip cursor={{fill: '#fff'}}/>
        <Legend />
        <Bar dataKey={dataKey} barSize={30} name={dataKeyLabel} stackId="a" fill="#8884d8" />
        {dataKey1 && <Bar dataKey={dataKey1} name={dataKeyLabel1} stackId="a" fill="#82ca9d" />}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default withTheme(BarGridChart);
