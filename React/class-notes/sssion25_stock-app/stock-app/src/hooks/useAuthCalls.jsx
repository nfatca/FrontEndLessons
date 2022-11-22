import { useDispatch } from "react-redux";
import axios from "axios";
import {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} from "../features/authSlice";

import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const BASE_URL = "https://10001.fullstack.clarusway.com/";

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );

      dispatch(loginSuccess(data));
      toastSuccessNotify("Login performed");
      navigate("/stock");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Login can not be performed");
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}account/auth/logout/`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed");
      navigate("/");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Logout can not be performed");
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/register/`,
        userInfo
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed");
      navigate("/stock");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Register can not be performed");
    }
  };

  return {
    login,
    logout,
    register,
  };
};

export default useAuthCalls;
