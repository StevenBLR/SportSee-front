import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../style/colors";
import { dashBoard_sideBts } from "../utils/iconsGroups";
import { getUserInfos } from "../datas/userData";
import LineGraph from "../components/graphs/LineGraph";
import BarGraph from "../components/graphs/BarGraph";
import RadarGraph from "../components/graphs/RadarGraph";
import PieGraph from "../components/graphs/PieGraph";

function Home() {
  //const sideButtons = [{title: "", subTitle: "", icon: }]
  const [user, setUser] = useState({});
  const userId = 18;

  useEffect(() => {
    getUserInfos(userId).then((res) => {
      const data = res.data.data;
      console.log("User infos = ", data);
      setUser(data);
    });
  }, []);

  return (
    <Container className="container">
      <Header className="header">
        {!user.id ? (
          <p>Loading </p>
        ) : (
          <>
            <h1>
              Bonjour{" "}
              <span className="header__name">{user.userInfos.firstName}</span>
            </h1>
            <h2>Féliciations ! Vous avez explosé vos objectifs hier 👏</h2>
          </>
        )}
      </Header>
      <Dashboard className="dashboard">
        <div className="dashboard__left-section">
          <div className="weight-chart">
            <BarGraph userId={userId} />
          </div>
          <div className="dashboard__more-data">
            <LineGraph userId={userId} />
            <RadarGraph userId={userId} />
            <PieGraph userId={userId} />
          </div>
        </div>
        <div className="dashboard__right-section">
          {dashBoard_sideBts.map((bt, i) => (
            <div className="nutriments" key={bt.name}>
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
  width: 100%;
  height: 60vh;

  .dashboard {
    &__left-section {
      padding: 20px;
      width: 75%;
      height: 100%;
      //background-color: blue;
      .weight-chart {
        height: 50%;
        width: 100%;
      }
      .dashboard__more-data {
        margin: 20px;
        display: flex;
        height: 50%;
        .chart {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1 1 auto;
        }
      }
    }
    &__right-section {
      display: flex;
      padding-top: 20px;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      width: clamp(400px, 20vw, 740px);
      //background-color: purple;
      .nutriments {
        display: flex;
        align-items: center;
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
