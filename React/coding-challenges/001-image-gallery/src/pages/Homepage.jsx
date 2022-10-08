import Picture from "../components/Picture";

const Homepage = ({ data }) => {
  return (
    <div>
      <h1>Albums</h1>
      <Picture data={data} />
    </div>
  );
};

export default Homepage;
