import React, { useEffect, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import { colors } from "../../style/colors";
import PropTypes from "prop-types";

PieGraph.propTypes = {
  userScore: PropTypes.number,
};

/**
 * Displays user last activity's data
 * @param {Number} userScore Current user score
 */
function PieGraph(props) {
  const [activeIndex, setActiveIndex] = useState();
  const [score, setScore] = useState(0);
  const { userScore } = props;

  //
  useEffect(() => {
    setScore(userScore * 100);
    console.log(("Score = ", userScore * 100));
  }, [userScore]);

  const data = [{ name: "score", value: userScore }];

  // onPieEnter = (_, index) => {
  //   this.setState({
  //     activeIndex: index,
  //   });
  // };

  return (
    <ChartWrapper className="chart">
      {!score ? (
        <p>Loading </p>
      ) : (
        <>
          <p className="chart__label">Score</p>
          <div className="chart__target">
            <p className="nb">{score}%</p>
            <p className="txt">de votre objectif</p>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                startAngle={90}
                endAngle={360 * userScore + 90}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={70}
                fill={colors.red}
                dataKey="value"
                //onMouseEnter={this.onPieEnter}
              />
            </PieChart>
          </ResponsiveContainer>
        </>
      )}
    </ChartWrapper>
  );
}
export default PieGraph;

const ChartWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${colors.lightGray};

  p {
    font-weight: bold;
  }
  .chart__label {
    position: absolute;
    top: 10%;
    left: 0;
    z-index: 1;
    color: black;
    font-size: 0.8rem;
    margin-inline: 20px;
    margin-block: unset;
    text-align: left;
    width: 60%;
  }
  .chart__target {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    color: black;
    font-size: 0.8rem;
    margin-inline: 20px;
    margin-block: unset;
    text-align: center;
    width: 80px;
    .nb {
      color: black;
      font-size: 1.75rem;
      margin-block: unset;
    }
    .txt {
      opacity: 0.5;
      margin: unset;
    }
  }
`;
