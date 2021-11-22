import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const data = [{ name: "Group A", value: 400 }];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function PieGraph() {
  return (
    <ChartWrapper>
      <ResponsiveContainer width="100%" height="100%" className="pie-charts">
        <PieChart width="100% " height="100%">
          <Pie
            data={data}
            cx={420}
            cy={200}
            startAngle={0}
            endAngle={270}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

export default PieGraph;

const ChartWrapper = styled.div`
  //margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 33%;
  height: 100%;
  background-color: white;
  display: flex;
  p {
    font-weight: bold;
  }
`;
