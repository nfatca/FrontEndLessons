import React from "react";
import { axiosWithToken } from "../service/axiosInstance";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";

const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      console.log(data);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getFirms = async () => getStockData("firms");
  const getSales = async () => getStockData("sales");

  return { getFirms, getSales };
};

export default useStockCalls;
