import styled from "styled-components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <Container className="app">
      <GlobalStyle />
      <Navbar />
      <SideBarGroup>
        <SideBarStd />
        <Home />
      </SideBarGroup>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideBarGroup = styled.div`
  display: flex;
  margin-left: 100px;
`;

const SideBarStd = styled(Sidebar)`
  position: absolute;
  left: 0;
  bottom: 0;
`;
