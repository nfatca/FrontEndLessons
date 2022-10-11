import "./App.css";
import Card from "./components/cards/Card";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import data from "./helper/Data";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Card data={data} />
    </>
  );
}

export default App;
