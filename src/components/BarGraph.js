import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { colors } from "../style/colors";
import { getUserActivity } from "../routes/user";

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

/**
 * Displays user last activity's data
 * @param {Number} userId Id used to fetch data on DB
 *
 *   <BarGraph userId={userId} />
 *
 */
function BarGraph(props) {
  const { userId } = props;
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    getUserActivity(userId).then((res) => {
      const data = res.data.data.sessions;
      setActivity(data);
    });
  }, []);

  useEffect(() => {
    if (activity.length > 0) formatData();
  }, [activity]);

  function formatData() {
    let formattedAct = [];
    activity.forEach((act, i) => {
      act["name"] = i + 1;
      formattedAct.push(act);
    });
    console.log(formattedAct);
  }

  return (
    <ChartWrapper>
      {activity?.length === 0 ? (
        <p>Loading</p>
      ) : (
        <Container width="100%" height="100%" className="bar-charts">
          <BarChart data={activity}>
            <XAxis dataKey="name" stroke="#8884d8" />
            {/* <YAxis /> */}
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="kilogram" fill={colors.black} barSize={15} />
            <Bar dataKey="calories" fill={colors.red} barSize={15} />
          </BarChart>
        </Container>
      )}
    </ChartWrapper>
  );
}

export default BarGraph;

const Container = styled(ResponsiveContainer)`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const ChartWrapper = styled.div`
  margin: 20px;
  display: flex;
  //width: 50%;
  height: 100%;
  background-color: white;
`;
