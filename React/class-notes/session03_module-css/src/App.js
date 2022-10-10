import Card from "./components/card/Card";
import data from "./util/data";

function App() {
  //? JS

  return (
    //? JSX

    <>
      {data.map((item) => {
        // console.log(item);
        const { id, language, img, btnName } = item; //! dest.
        return (
          <Card key={id} language={language} img={img} btnName={btnName} />
        );
      })}
    </>
  );
}

export default App;
