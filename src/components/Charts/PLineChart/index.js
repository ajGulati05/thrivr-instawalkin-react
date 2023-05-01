import React, { memo } from "react";
import PropTypes from "prop-types";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import moment from "moment";
import { CustomResponsiveContainer, XAxisTick, LegendText } from "./styled";
import { colorPalette } from "../../../constants/styleguide";

const getDay = value => {
  return moment(value)
    .format("llll")
    .split(",")[0];
};

const getDate = value => {
  return moment(value)
    .format("L")
    .split("/")[1];
};

const CustomXAxisTick = ({ xtickType, ...rest }) => {
  return (
    <g>
      <XAxisTick x={0} y={0} dy={16} {...rest}>
        {xtickType === "date" ? getDate(rest.payload.value) : rest.payload.value.split("-")[0]}
      </XAxisTick>
      <XAxisTick x={0} y={0} dy={32} {...rest}>
        {xtickType === "date" ? getDay(rest.payload.value) : rest.payload.value.split("-")[1]}
      </XAxisTick>
    </g>
  );
};

const PLineChart = ({
  width,
  height,
  data,
  margin,
  gridColor,
  dataKey,
  dataKeyX,
  dataKeyY,
  tickCountY,
  lineColor,
  lineWidth,
  activeDot,
  dotColor,
  dotWidth,
  dotVisible,
  legendData,
  xtickType
}) => {
  const renderColorfulLegendText = (value, entry) => {
    const { color } = entry;
    return <LegendText color={color}>{legendData[value]}</LegendText>;
  };

  return (
    <CustomResponsiveContainer width={width} height={height}>
      <LineChart data={data} margin={margin}>
        <CartesianGrid vertical={false} stroke={gridColor} />
        <XAxis axisLine={false} dataKey={dataKeyX} tickLine={false} tick={<CustomXAxisTick xtickType={xtickType} />} />
        <YAxis
          axisLine={false}
          dataKey={dataKeyY}
          tickLine={false}
          tickCount={tickCountY}
          tickFormatter={tick => (tick > 1000 ? `${tick / 1000} K` : tick)}
          tickMargin={15}
          style={{
            fill: colorPalette.placeholder,
            fontFamily: "Roboto",
            fontSize: "11px",
            fontWeight: "normal"
          }}
        />
        <Tooltip />
        {legendData && (
          <Legend
            align="center"
            iconType="circle"
            formatter={renderColorfulLegendText}
            wrapperStyle={{
              paddingLeft: "52px",
              paddingTop: "40px"
            }}
          />
        )}
        {dataKey.map((dKey, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={dKey}
            stroke={lineColor[index]}
            strokeWidth={lineWidth}
            activeDot={{ r: activeDot }}
            dot={dotVisible ? { stroke: dotColor, strokeWidth: dotWidth } : dotVisible}
          />
        ))}
      </LineChart>
    </CustomResponsiveContainer>
  );
};

PLineChart.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  data: PropTypes.array,
  margin: PropTypes.object,
  gridColor: PropTypes.string,
  dataKey: PropTypes.arrayOf(PropTypes.string),
  dataKeyX: PropTypes.string,
  dataKeyY: PropTypes.string,
  tickCountY: PropTypes.number,
  lineColor: PropTypes.arrayOf(PropTypes.string),
  lineWidth: PropTypes.number,
  activeDot: PropTypes.number,
  dotColor: PropTypes.string,
  dotWidth: PropTypes.number,
  dotVisible: PropTypes.bool,
  legendData: PropTypes.object,
  xtickType: PropTypes.oneOf(["date", "dateString"])
};

PLineChart.defaultProps = {
  width: "100%",
  height: 350,
  margin: {
    top: 12,
    right: 4,
    left: 4,
    bottom: 20
  },
  gridColor: "#edeef5",
  dataKey: ["value"],
  dataKeyX: "time",
  tickCountY: 8,
  lineColor: ["#3f51b5"],
  lineWidth: 2,
  dotColor: "#bdbdbd",
  activeDot: 4,
  dotWidth: 2,
  dotVisible: true,
  xtickType: "date"
};

export default memo(PLineChart);
