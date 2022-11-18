import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";

const BASE_URL = "https://clarusway.pythonanywhere.com/";

const useAuthCall = () => {
  const dispatch = useDispatch();

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const data = await axios.url(`${BASE_URL}account/auth/login/`, userInfo);
      dispatch(loginSuccess());
      return data;
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  return { login };
};

export default useAuthCall;
