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
import { getUserActivity } from "../../datas/userData";

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
  }, [userId]);

  // Format data to populate graph
  useEffect(() => {
    if (activity.length > 0) formatData();
  }, [activity, userId]);

  function formatData() {
    let formatedDatas = [];
    activity.forEach((act, i) => {
      act["name"] = i + 1;
      formatedDatas.push(act);
    });
    console.log("Activity Infos = ", formatedDatas);
  }

  return (
    <ChartWrapper className="chart">
      {activity?.length === 0 ? (
        <p>Loading</p>
      ) : (
        <ResponsiveContainer width="100%" height="100%" className="bar-charts">
          <BarChart data={activity}>
            <XAxis dataKey="name" stroke="#8884d8" />
            {/* <YAxis /> */}
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="kilogram" fill={colors.black} barSize={15} />
            <Bar dataKey="calories" fill={colors.red} barSize={15} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </ChartWrapper>
  );
}

export default BarGraph;

const ChartWrapper = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  p {
    font-weight: bold;
  }
`;
