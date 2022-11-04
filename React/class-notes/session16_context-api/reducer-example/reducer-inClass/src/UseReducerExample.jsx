import { useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";

const UseReducerExample = () => {
  //   const [catImage, setCatImage] = useState("");
  //   const [error, setError] = useState("");
  //   const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const { loading, error, catImage } = state;

  const getCatImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";
    // setLoading(true);
    dispatch({ type: "START" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      //   setCatImage(data[0].url);
      //   setError("");
      dispatch({ type: "SUCCESS", payload: data[0].url });
    } catch (error) {
      //   setError("DATA CAN NOT BE FETCHED");
      //   setCatImage("");
      dispatch({ type: "FAIL", payload: "DATA CAN NOT BE FETCHED" });

      //   console.log(error);
    }
    // finally {
    //   setLoading(false);
    // }
  };

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

export default UseReducerExample;
