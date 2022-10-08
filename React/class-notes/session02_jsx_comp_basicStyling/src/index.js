import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

//! index componenti ReactDOM.createRoot() metodu ile
//! public klasorunde yer alan index.html icersindeki id'si root
//! olan elemana erisir.

//* render() metodu içerisinde App componenti cagrilir.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
