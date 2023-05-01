import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { StarFilled } from "@ant-design/icons";
import { Card } from "antd";

const COLORS = ["#26bd7e", "#fcdf03", "#fc9d03", "#ff7271", "#991515"];

const style = {
  top: 50,
  left: 250,
  lineHeight: "5px"
};

const stars = [1, 2, 3, 4, 5];

export default class ReviewsChart extends PureComponent {
  render() {
    const { data } = this.props;
    let reviewStats = data.map(item => ({
      value: item.score_count
    }));

    reviewStats.reverse();

    return (
      <Card>
        <h3>Review</h3>
        <PieChart width={250} height={200} onMouseEnter={this.onPieEnter}>
          <Pie
            isAnimationActive={false}
            data={reviewStats}
            cx={120}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {reviewStats.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend
            payload={stars.map((item, index) => ({
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
                    {stars.slice(0, 5 - index).map(i => (
                      <StarFilled key={i} />
                    ))}
                    <span className="chart-num" style={{ marginLeft: 30 }}>
                      {index < reviewStats.length ? reviewStats[index].value : 0}
                    </span>
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
  }
}
