import "./Main.scss";
import Data from "../../helper/Data";
import Card from "./Card";
const Main = () => {
  // console.log(Data);
  return (
    <div className="card-container">
      {Data.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </div>
  );
};

export default Main;
