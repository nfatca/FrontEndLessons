const setTime = () => {
  //! Vanilla JS Element
  const jsElement = `
   <div>
      <h1>Javascript Element</h1>
      <p>${new Date().toLocaleTimeString()}</p>
   </div>
`;

  document.querySelector(".container-1").innerHTML = jsElement;

  //! React Element without JSX
  const reactElement = React.createElement(
    "div",
    null,
    React.createElement("h1", null, "React"),
    React.createElement("p", null, new Date().toLocaleTimeString())
  );
  ReactDOM.render(reactElement, document.querySelector(".container-2"));
};

setInterval(setTime, 1000);
