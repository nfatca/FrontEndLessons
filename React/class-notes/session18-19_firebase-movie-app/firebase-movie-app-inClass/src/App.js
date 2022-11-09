import React, { useEffect } from "react";
import { userObserver } from "./auth/firebase";
import AuthContextProvider from "./context/AuthContextProvider";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      {/* <AuthContextProvider children={<AppRouter />} /> */}
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
};

export default App;
