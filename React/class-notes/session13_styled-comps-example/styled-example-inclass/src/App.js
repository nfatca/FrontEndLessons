import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";

const style = {
  colors: {
    header: "#fff",
    body: "#eee",
    footer: "#8A1C4A",
  },
  margins: {},
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
