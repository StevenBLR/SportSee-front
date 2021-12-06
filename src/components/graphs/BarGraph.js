import React, { Component, useEffect, useState } from "react";
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
import PropTypes from "prop-types";
import CustomTooltip from "../CustomTooltip";

BarGraph.propTypes = {
  userId: PropTypes.number,
};

/**
 * Displays user last activity's data
 * @param {Number} userId Id used to fetch data on DB
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

  /**
   * Format data to fit graph with graph input requirements
   */
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
        <>
          <p className="chart__label">Activité quotidienne</p>
          <div className="chart__legend">
            <div className="weight">
              <p className="dot"></p>
              <p>Poids (kg)</p>
            </div>
            <div className="calories">
              <p className="dot"></p>
              <p>Calories brûlées (kCal)</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="80%" className="bar-charts">
            <BarChart data={activity}>
              <XAxis dataKey="name" stroke="#8884d8" />
              {/* <YAxis /> */}
              <Tooltip content={<CustomTooltip type="barGraph" />} />
              <CartesianGrid
                stroke="#ccc"
                strokeDasharray="5 5"
                horizontal={true}
              />
              <Bar dataKey="kilogram" fill={colors.black} barSize={15} />
              <Bar dataKey="calories" fill={colors.red} barSize={15} />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </ChartWrapper>
  );
}

export default BarGraph;

const ChartWrapper = styled.div`
  padding: 20px;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 85%;
  background-color: ${colors.lightGray};
  display: flex;
  p {
    font-weight: bold;
  }
  .chart__label {
    position: absolute;
    top: 15px;
    left: 2%;
    z-index: 1;
    color: black;
    font-size: 1rem;
    margin-inline: 20px;
    margin-block: unset;
    text-align: left;
    width: 40%;
  }
  .chart__legend {
    display: flex;
    flex-wrap: wrap;
    z-index: 1;
    position: absolute;
    top: 5px;
    right: 15px;
    div {
      display: flex;
      flex-direction: row;
      margin-inline: 5px;
    }
    p {
      color: ${colors.darkGray};
      margin-inline: 10px;
      z-index: 1;

      &::before {
        content: "";
        display: block;
        background-color: red;
      }
    }
    .dot {
      align-self: center;
      width: 10px;
      height: 10px;
      background-color: red;
      border-radius: 100%;
    }
    .weight {
      .dot {
        background-color: black;
      }
    }
  }
`;
