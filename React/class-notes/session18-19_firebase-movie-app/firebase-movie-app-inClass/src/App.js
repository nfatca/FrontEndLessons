import React, { useEffect } from "react";
import { userObserver } from "./auth/firebase";
import AppRouter from "./router/AppRouter";

const App = () => {
  useEffect(() => {
    userObserver();
  }, []);

  return (
    <div>
      <AppRouter />
      {/* <Register /> */}
    </div>
  );
};

export default App;
