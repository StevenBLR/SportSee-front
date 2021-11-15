import React from "react";
import styled from "styled-components";

function Home() {
  return <Dashboard className="dashboard"></Dashboard>;
}

export default Home;

const Dashboard = styled.div`
  display: flex;
  width: clamp(10px, 50vw, 1200px);
  background-color: beige;
`;
