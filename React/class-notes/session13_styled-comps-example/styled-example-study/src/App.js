import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { GlobalStyles } from "./components/styles/Global.styled";

const style = {
  colors: {
    header: "#fff",
    body: "#eee",
    footer: "#8a1c4a",
  },
  margin: {},
  responsive: "768px",
};
const App = () => {
  return (
    <>
      <ThemeProvider theme={style}>
        <GlobalStyles />
        <Header />
      </ThemeProvider>
    </>
  );
};

export default App;
