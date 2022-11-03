import { useState } from "react";

const UseStateExample = () => {
  const [catImage, setCatImage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getCatImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCatImage(data[0].url);
      setError("");
    } catch (error) {
      setError("DATA CAN NOT BE FETCHED");
      setCatImage("");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(error);
  console.log(catImage);

  return (
    <div>
      <button
        onClick={getCatImage}
        disabled={loading}
        style={{ display: "block", margin: "1rem" }}
      >
        Get Cat Image
      </button>
      {error && <h2>{error}</h2>}
      {catImage && <img width="50%" src={catImage} alt="img" />}
    </div>
  );
};

export default UseStateExample;
