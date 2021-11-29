import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import { colors } from "../../style/colors";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <ChartWrapper>
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`PV ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    </ChartWrapper>
  );
};

export default class PieGraph extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si";

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <ChartWrapper className="chart">
        <p className="chart__label">
          Score
          {/* <span>12% &nbsp;</span> de votre objectif */}
        </p>
        <div className="chart__target">
          <p className="nb">12%</p>
          <p className="txt">de votre objectif</p>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={90}
              fill={colors.red}
              dataKey="value"
              onMouseEnter={this.onPieEnter}
            />
          </PieChart>
        </ResponsiveContainer>
      </ChartWrapper>
    );
  }
}

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
    width: 40%;
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
