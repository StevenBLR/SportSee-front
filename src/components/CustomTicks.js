import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "../style/colors";

function CustomTicks({ x, y, payload, type }) {
  const graphType = ["barGraph", "lineGraph"];
  return (
    <>
      {console.log(payload)}
      <svg
        x={x - 12}
        y={y + 4}
        width={24}
        height={24}
        viewBox="0 0 1024 1024"
        fill="#666"
      ></svg>
      {/* {type === graphType[1] && (
            // <LineTooltipContainer className="tooltip">
            //   <p>{`${payload[0].value} min`}</p>
            // </LineTooltipContainer>
          )} */}
    </>
  );
}

export default CustomTicks;

const BarGraphTicksContainer = styled.div`
  display: flex;
  margin: 20px;
`;
