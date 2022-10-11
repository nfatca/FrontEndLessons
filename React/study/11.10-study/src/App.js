import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Data from "./helper/Data";
import img from "./img/clarusway.png";

function App() {
  return (
    <>
      <Header />
      {Data.map((item) => (
        <Main {...item} />
      ))}
      <Footer />
    </>
  );
}

export default App;
