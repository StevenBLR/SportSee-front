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
import { colors } from "../../style/colors";
import PropTypes from "prop-types";
import CustomTooltip from "../CustomTooltip";

LineGraph.propTypes = {
  userId: PropTypes.number,
};

/**
 * Displays user last activity's data
 * @param {Number} userId Id used to fetch data on DB
 */
function LineGraph(props) {
  const { userId } = props;
  const [averageSession, setAverageSession] = useState([]);
  const daysInitial = ["L", "M", "M", "J", "V", "S", "D"];

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

  /**
   * Format data to fit graph with graph input requirements
   */
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
        <>
          <p className="chart__label">Durée moyenne des sessions</p>
          {/* // <ResponsiveContainer width="100%" height="80%"> */}
          <ResponsiveContainer height="80%">
            <AreaChart
              data={averageSession}
              margin={{
                bottom: 0,
                top: 50,
              }}
            >
              <XAxis dataKey="name" height={40} tickMargin={10} />

              <Tooltip content={<CustomTooltip type="lineGraph" />} />
              <Area
                type="monotone"
                dataKey="sessionLength"
                stroke="white"
                fill={colors.red}
              />
            </AreaChart>
          </ResponsiveContainer>
        </>
      )}
    </ChartWrapper>
  );
}

export default LineGraph;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  background-color: ${colors.red};
  display: flex;
  tspan {
    color: white;
  }
  p {
    font-weight: bold;
  }
  .chart__label {
    position: absolute;
    top: 10%;
    left: 5%;
    z-index: 1;
    color: white;
    opacity: 0.5;
    font-size: 0.8rem;
    margin-inline: 20px;
    margin-block: unset;
    text-align: left;
    width: 60%;
  }
`;
