import { Button, TomatoButton } from "./components/Button";
import Container from "./components/Container";
import HeaderText from "./components/HeaderText";
import StyledLink from "./components/Link";

const App = () => {
  return (
    <>
      <Container bg="gray">
        <HeaderText color="hotpink"> STYLED COMPONENTS</HeaderText>
        <Button primary>Click</Button>
        <Button>Clear</Button>
        <TomatoButton>Send</TomatoButton>
        <TomatoButton primary>Submit</TomatoButton>
      </Container>
      <Container>
        <StyledLink href="#" target="_blank">
          Link
        </StyledLink>
      </Container>
    </>
  );
};

export default App;
