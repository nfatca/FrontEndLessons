export const initialState = {
  loading: false,
  catImage: "",
  error: "",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true, catImage: "", error: "" };
    case "SUCCESS":
      return { ...state, loading: false, catImage: action.payload, error: "" };

    case "FAIL":
      return {
        ...state,
        loading: false,
        catImage: "",
        error: action.payload,
      };

    default:
      break;
  }
};
