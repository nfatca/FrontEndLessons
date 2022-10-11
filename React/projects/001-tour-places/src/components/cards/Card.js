import "./Card.css";
// import Navbar from "../navbar/Navbar";

const Card = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        const { id, title, desc, img } = item;
        return (<h1>{title}</h1>), (<img src={img} alt="" />);
      })}
    </>
  );
};

export default Card;
