import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../style/colors";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { getPerformance } from "../../datas/userData";
const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

function RadarGraph(props) {
  const { userId } = props;
  const [performance, setPerformance] = useState([]);
  //const [kinds, setKinds] = useState([]);
  // Fetch user data ( Average sesions )
  useEffect(() => {
    getPerformance(userId).then((res) => {
      // 1 - Store data into local variables
      const data = res.data.data.data;
      const kinds = res.data.data.kind;

      // 2 - Format data
      let perfs = [];
      data.forEach((perf, i) => {
        // 2a - Convert kind index to string
        perf.kind = kinds[perf.kind]; // kind nb --> string
        // 2b - Add fullMark nb
        perf.fullMark = 200;
        perfs.push(perf);
      });
      console.log("Perfs = ", perfs);

      // 2 - Store data to useStates
      setPerformance(perfs);
    });
  }, [userId]);

  // Format data to populate graph
  useEffect(() => {
    if (performance.length > 0) console.log("Performance =", performance);
    //
  }, [performance, userId]);

  return (
    <ChartWrapper className="chart">
      {performance && (
        <ResponsiveContainer width="50%" height="50%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performance}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <Radar
              name="Performance graph"
              dataKey="value"
              stroke="#8884d8"
              fill={`${colors.red}`}
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </ChartWrapper>
  );
}

export default RadarGraph;

const ChartWrapper = styled.div`
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${"white"};
  tspan {
    color: red;
    font-weight: bold;
  }
  display: flex;
  p {
    font-weight: bold;
  }
`;
