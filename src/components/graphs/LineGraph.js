import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { getAverageSessions } from "../../datas/userData";
const daysInitial = ["L", "M", "M", "J", "V", "S", "D"];
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function LineGraph(props) {
  const { userId } = props;
  const [averageSession, setAverageSession] = useState([]);

  // Fetch user data ( Average sesions )
  useEffect(() => {
    getAverageSessions(userId).then((res) => {
      const data = res.data.data.sessions;
      setAverageSession(data);
    });
  }, [userId]);

  // Format data to populate graph
  useEffect(() => {
    if (averageSession.length > 0) formatData();
    console.log("Average sessions =", averageSession);
  }, [averageSession, userId]);

  function formatData() {
    let formatedDatas = [];
    averageSession.forEach((as, i) => {
      as["name"] = daysInitial[i];
      formatedDatas.push(as);
    });
    console.log("Activity Infos = ", formatedDatas);
  }

  return (
    <ChartWrapper className="chart">
      {averageSession?.length === 0 ? (
        <p>Loading</p>
      ) : (
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart
            data={averageSession}
            margin={{
              bottom: 0,
              top: 50,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />

            <Tooltip />
            <Area
              type="monotone"
              dataKey="sessionLength"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </ChartWrapper>
  );
}

export default LineGraph;

const ChartWrapper = styled.div`
  margin-right: 20px;
  display: flex;
  min-width: 33%;
  height: 100%;
  background-color: white;
  display: flex;
  p {
    font-weight: bold;
  }
`;
