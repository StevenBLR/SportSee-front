import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "../style/colors";

function CustomTooltip({ active, payload, label, type }) {
  const graphType = ["barGraph", "lineGraph"];

  useEffect(() => {
    console.log(type);
  }, [type]);

  if (active) {
    return (
      <>
        {type === graphType[0] && (
          <BarTooltipContainer className="tooltip">
            <p>{`${payload[0].value} kg`}</p>
            <p>{`${payload[1].value} Kcal`}</p>
          </BarTooltipContainer>
        )}
        {type === graphType[1] && (
          <LineTooltipContainer className="tooltip">
            <p>{`${payload[0].value} min`}</p>
          </LineTooltipContainer>
        )}
      </>
    );
  } else return null;
}

export default CustomTooltip;

const BarTooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.red};
  color: white;
  padding: 15px;
  p {
    font-size: 0.8rem;
  }
`;

const LineTooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
  padding-left: 5px;
  padding-right: 5px;
  p {
    font-size: 0.8rem;
  }
`;
