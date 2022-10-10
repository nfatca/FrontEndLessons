// import "./Buton.css";
import ButonStyle from "./buton.module.css";

const Buton = ({ btnName }) => {
  // console.log(btnName);
  return (
    <div className={ButonStyle.title}>
      <button className={ButonStyle["btn-blue"]}>{btnName}</button>
    </div>
  );
};

export default Buton;
