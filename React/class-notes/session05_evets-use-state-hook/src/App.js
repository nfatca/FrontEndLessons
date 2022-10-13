import "./App.css";
import Event from "./components/1-events/Event";
import Counter from "./components/2-classComponents/Counter";
import UseStateCounter from "./components/3-useStateHook/UseStateCounter";

function App() {
  return (
    <div>
      <Event />
      <Counter />
      <Counter count={5} />
      <UseStateCounter />
    </div>
  );
}

export default App;
