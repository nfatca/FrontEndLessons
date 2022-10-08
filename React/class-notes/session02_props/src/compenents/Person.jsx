import Msg from "./Msg";

const Person = (props) => {
  const { name, img, tel } = props;
  return (
    <div style={{ textAlign: "center" }}>
      <Msg name={name} />

      <img style={{ width: "200px" }} src={img} alt="img1" />
      <p>{tel}</p>
    </div>
  );
};

export default Person;
