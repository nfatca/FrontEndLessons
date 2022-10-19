import { useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";
import UseEffectHook from "./components/UseEffectHook";
import User from "./components/User";
// import User from "./components/User";

function App() {
  const [show, setShow] = useState(true);
  // console.log(show);
  return (
    <div className="container text-center mt-4">
      {/* <button className="btn btn-dark" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button> */}

      {/* Short Circuit */}
      {/* {show && <LifeCycleMethods />} */}

      {/* {show && <UseEffectHook />} */}
      {/* <User /> */}
      {/* <LifeCycleMethods /> */}
      <User />
    </div>
  );
}

export default App;
