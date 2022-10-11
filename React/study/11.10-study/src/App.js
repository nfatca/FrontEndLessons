import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Data from "./helper/Data";

function App() {
  return (
    <>
      <Header />
      <Main data={Data} />
      <Footer />
    </>
  );
}

export default App;
