import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "../style/colors";

function CustomTicks({ active, payload, label, type }) {
  const graphType = ["barGraph", "lineGraph"];
  return (
    <>
      {type === graphType[0] && (
        <BarGraphTicksContainer className="tooltip">
          <p>{`${payload[0]} kg`}</p>
          {/* <p>{`${payload[0].value} kg`}</p>
          <p>{`${payload[1].value} Kcal`}</p> */}
        </BarGraphTicksContainer>
      )}
      {/* {type === graphType[1] && (
            // <LineTooltipContainer className="tooltip">
            //   <p>{`${payload[0].value} min`}</p>
            // </LineTooltipContainer>
          )} */}
    </>
  );
}

export default CustomTicks;

const BarGraphTicksContainer = styled.div``;
