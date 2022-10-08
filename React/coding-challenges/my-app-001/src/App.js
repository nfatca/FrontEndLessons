// import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import { data } from "./helper/data";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Homepage data={data} />
    </div>
  );
}

export default App;
