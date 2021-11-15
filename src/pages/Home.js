import React from "react";
import styled from "styled-components";
import { colors } from "../style/colors";
import { dashBoard_sideBts } from "../utils/iconsGroups";

function Home() {
  //const sideButtons = [{title: "", subTitle: "", icon: }]

  return (
    <Container>
      <Header className="header">
        <h1>
          Bonjour <span className="header__name">Thomas</span>
        </h1>
        <h2>Féliciations ! Vous avez explosé vos objectifs hier 👏</h2>
      </Header>
      <Dashboard className="dashboard">
        <div className="dashboard__left-section">
          <div className="weight"></div>
          <div className="dashboard__more-data"></div>
        </div>
        <div className="dashboard__right-section">
          {dashBoard_sideBts.map((bt) => (
            <div className="nutriments">
              <img src={bt.icon} alt={bt.name} />
              <div className="nutriments__infos">
                <p className="nutriments__data">1,930 kCal</p>
                <p className="nutriments__name">{bt.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Dashboard>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  //display: flex;
  margin: 20px;
  width: 90vw; //clamp(10px, 90vw, 1200px);
`;

const Header = styled.div`
  h1,
  h2 {
    margin: 20px;
  }
  h1 {
    font-size: 48px;
    .header__name {
      color: red;
    }
  }
  h2 {
    font-size: 18px;
    font-weight: 400;
  }
`;

const Dashboard = styled.div`
  display: flex;
  background-color: palegreen;
  width: 100%;
  height: 60vh;

  .dashboard {
    &__left-section {
      width: 100%;
      height: 100%;
      background-color: blue;
    }
    &__right-section {
      display: flex;
      flex-direction: column;
      width: clamp(400px, 20vw, 740px);
      background-color: purple;
      .nutriments {
        display: flex;
        align-items: center;
        margin: 20px;
        border-radius: 5px;
        background-color: ${colors.lightGray};
        img {
          margin: 20px;
          width: 60px;
          height: 60px;
        }
        &__infos p {
          margin: 5px;
        }
        &__data {
          font-weight: 700;
          font-size: 1rem;
        }
        &__name {
          color: ${colors.darkGray};
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
`;
