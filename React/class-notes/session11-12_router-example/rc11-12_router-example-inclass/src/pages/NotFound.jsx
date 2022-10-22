import errorImg from "../img/404.png";

const NotFound = () => {
  return (
    <div className="container text-center mt-4">
      <img className="w-75" src={errorImg} alt="" />
      <div>
        <button className="btn btn-success me-2">Home</button>
        <button className="btn btn-warning">Go Back</button>
      </div>
    </div>
  );
};

export default NotFound;
