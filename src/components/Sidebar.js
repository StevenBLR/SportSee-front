import React from "react";
import styled from "styled-components";
import { colors } from "../style/colors";
import { sideBar_sideBarBts } from "../utils/iconsGroups";

function Sidebar() {
  const copyright = "Copyright, SportSee 2020";
  return (
    <Container className="sidebar">
      {sideBar_sideBarBts.map((bt) => (
        <img src={bt.icon} alt={bt.name} />
      ))}
      <p>{copyright}</p>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  width: 100px; //clamp(70px, 10vw, 100px);
  height: calc(100vh - 31px);
  z-index: -1;
  background-color: ${colors.black};
  img {
    cursor: pointer;
    margin: 20px;
    width: 50%;
  }
  p {
    z-index: -1;
    font-size: 12px;
    position: absolute;
    bottom: 180px;
    margin: 20px;
    color: white;
    width: 200px;
    text-align: start;
    transform: rotate(-90deg);
  }
`;
