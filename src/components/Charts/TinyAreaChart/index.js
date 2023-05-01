import React, { memo } from "react";
import PropTypes from "prop-types";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const TinyAreaChart = ({ data, dataKey, type, stroke, fill, margin, width, height }) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <AreaChart data={data} margin={margin}>
        <Area type={type} dataKey={dataKey} stroke={stroke} fill={fill} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

TinyAreaChart.propTypes = {
  //TODO: should be defined object type based on the chart data later
  data: PropTypes.arrayOf(PropTypes.object),
  dataKey: PropTypes.string,
  type: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    left: PropTypes.number,
    bottom: PropTypes.number
  }),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TinyAreaChart.defaultProps = {
  dataKey: "datakey",
  type: "monotone",
  stroke: "transparent",
  fill: "#8884d8",
  margin: {
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  },
  width: "100%",
  height: 32
};

export default memo(TinyAreaChart);
