import React from "react";
import PropTypes from "prop-types";
import { BarChart, Bar, ReferenceLine, XAxis, YAxis, ResponsiveContainer } from "recharts";

const PairBarChart = ({
  data,
  dataKey,
  width,
  height,
  barWidth,
  reverse,
  refLineColor,
  barColor,
  barBgColor,
  domain,
  fillOpacity
}) => {
  function checkingEmptyDomain(d) {
    return d[0] === 0 && d[1] === 0;
  }

  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart layout="vertical" data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} barSize={barWidth}>
        <XAxis type="number" axisLine={false} hide={true} domain={domain} reversed={reverse} />
        <YAxis
          dataKey="name"
          type="category"
          axisLine={false}
          hide={true}
          padding={{ left: 10, right: 10 }}
          reversed={reverse}
        />
        {dataKey.map((item, index) => (
          <Bar
            key={index}
            dataKey={item}
            fill={barColor[index]}
            fillOpacity={fillOpacity[index]}
            stackId="stack"
            background={{ fill: index > 0 ? "transparent" : barBgColor }}
            radius={index === dataKey.length - 1 ? [0, 3, 3, 0] : [0, 0, 0, 0]}
          />
        ))}
        {!checkingEmptyDomain(domain) && <ReferenceLine x={0} stroke={refLineColor} isFront={true} />}
      </BarChart>
    </ResponsiveContainer>
  );
};

PairBarChart.propTypes = {
  data: PropTypes.array.isRequired,
  datakey: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  barWidth: PropTypes.number,
  reverse: PropTypes.bool,
  refLineColor: PropTypes.string,
  barColor: PropTypes.arrayOf(PropTypes.string),
  barBgColor: PropTypes.string,
  domain: PropTypes.array,
  fillOpacity: PropTypes.arrayOf(PropTypes.number)
};

PairBarChart.defaultProps = {
  datakey: ["value"],
  width: "100%",
  height: 38,
  barWidth: 24,
  reverse: false,
  refLineColor: "#bdbdbd",
  barColor: ["#82ca9d"],
  barBgColor: "#eee",
  domain: [0, 0],
  fillOpacity: [1]
};

export default PairBarChart;
