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
import { colors } from "../../style/colors";
import { getUserActivity } from "../../routes/user";

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

  // Fetch user data
  useEffect(() => {
    getUserActivity(userId).then((res) => {
      const data = res.data.data.sessions;
      setActivity(data);
    });
  }, []);

  // Format data to populate graph
  useEffect(() => {
    if (activity.length > 0) formatData();
  }, [activity]);

  function formatData() {
    let formattedAct = [];
    activity.forEach((act, i) => {
      act["name"] = i + 1;
      formattedAct.push(act);
    });
    console.log("Activity Infos = ", formattedAct);
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
  //box-sizing: border-box;
  //display: flex;
  //justify-content: center;
`;

const ChartWrapper = styled.div`
  margin: 20px;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: white;
  display: flex;
  p {
    font-weight: bold;
  }
`;
