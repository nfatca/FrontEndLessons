import Buton from "../buton/Buton";
// import "./Card.css";
import CardStyle from "./card.module.css";

const Card = ({ language, btnName, img }) => {
  console.log(btnName);
  // const { language, btn, img } = props;  //!destr.
  return (
    <div>
      <h1 className={CardStyle["title"]}>{language}</h1>
      <img className={CardStyle["images"]} src={img} alt="img" />
      <Buton btnName={btnName} />
    </div>
  );
};

export default Card;
