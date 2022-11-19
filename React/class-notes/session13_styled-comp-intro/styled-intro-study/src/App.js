import { Button, TomatoButton } from "./components/Button.styled";
import Container from "./components/Container";
import HeaderText from "./components/HeaderText.styled";
import StyledLink from "./components/Link.styled";

const App = () => {
  return (
    <>
      <Container bg="blue">
        <HeaderText color="hotpink"> STYLED COMPONENTS</HeaderText>
        <Button primary>Save</Button>
        <Button>Clear</Button>
        <TomatoButton>Add</TomatoButton>
        <TomatoButton primary>Submit</TomatoButton>
      </Container>
      <Container bg="gray">
        <StyledLink target="_blank" href="https://clarusway.com/">
          {" "}
          Clarusway
        </StyledLink>
        <StyledLink secondary target="_blank" href="https://reactjs.org/">
          {" "}
          React
        </StyledLink>
      </Container>
    </>
  );
};

export default App;
