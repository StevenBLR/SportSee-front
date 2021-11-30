import React from "react";
import styled from "styled-components";
import { colors } from "../style/colors";
import logo from "../imgs/logo.svg";

function Navbar() {
  const buttons = ["Accueil", "Profil", "Réglage", "Communauté"];
  return (
    <Container className="navbar">
      <img src={logo} alt="logo" />
      {buttons.map((bt) => (
        <button key={`${bt}_bt`}>{bt}</button>
      ))}
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.black};
  height: 90px;
  width: 100%;
  img {
    margin: 20px;
    cursor: pointer;
  }
  button {
    cursor: pointer;
    font-size: clamp(17px, 2vw, 20px);
    border: none;
    margin-right: 40px;
    padding: 20px 30px;
    background-color: unset;
    color: white;
  }
`;
