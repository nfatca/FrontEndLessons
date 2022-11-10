import "./App.css";
import Counter from "./components/counter/Counter";
// import Todo from "./components/todo/Todo";
import { Provider } from "react-redux";
import { store } from "./redux";

// import { legacy_createStore as createStore } from "redux";
// import reducer from "./redux";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
      </Provider>
      {/* <Todo /> */}
    </div>
  );
}

export default App;
