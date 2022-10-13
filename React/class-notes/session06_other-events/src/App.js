import Form from "./components/1-forms/Form";
import KeyboardEvents from "./components/2-keyboardClipboardEvents/KeyboardClipboard";
import MouseEvent from "./components/3-mouseEvents/MouseEvent";

function App() {
  return (
    <div className="container mt-4 text-center">
      <Form />
      <KeyboardEvents />
      <MouseEvent />
    </div>
  );
}

export default App;
