import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { Card } from "antd";
import { isEmpty } from "lodash";

const COLORS = ["#EFD582", "#C4C4D6", "#D1A6C5", "#A5D7C5", "#E8A2B6", "#991515"];

const style = {
  top: 50,
  left: 250,
  lineHeight: "5px"
};

const TopTreatment = ({ data }) => {
  const allDurations = useSelector(({ duration: { allDurations } }) => allDurations);

  let chartData = data.map(item => ({
    value: item.project_count,
    id: item.project_id
  }));
  chartData.reverse();

  let treatments = [];
  !isEmpty(allDurations) &&
    allDurations.map(treat =>
      data.map(
        i =>
          treat.id === i.project_id &&
          treatments.push({ description: treat.description, id: i.project_id, count: i.project_count })
      )
    );
  return (
    <Card>
      <h3>Top Treatments</h3>
      <PieChart width={250} height={200}>
        <Pie
          isAnimationActive={false}
          data={data}
          cx={120}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="project_count"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          payload={treatments.map((item, index) => ({
            type: "square",
            color: COLORS[index],
            value: (
              <p
                style={{
                  display: "inline-grid"
                }}
              >
                <span
                  style={{
                    fontWeight: 500
                  }}
                >
                  {`${item.description} ${item.count}`}
                </span>
              </p>
            )
          }))}
          iconSize={10}
          width={135}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </PieChart>
    </Card>
  );
};

export default TopTreatment;
