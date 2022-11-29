import React from "react";
// import { axiosWithToken } from "../service/axiosinstance";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  //!-------------- GET CALLS -----------------
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

  const getFirms = () => getStockData("firms");
  const getSales = () => getStockData("sales");
  const getBrands = () => getStockData("brands");
  const getProducts = () => getStockData("products");
  const getPurchases = () => getStockData("purchases");

  //!-------------- DELETE CALLS -----------------

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`${url} was deleted with succesfully`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      toastErrorNotify(`${url} wasn't deleted`);
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const deleteFirm = (id) => deleteStockData("firms", id);
  return {
    getFirms,
    getSales,
    getBrands,
    getProducts,
    getPurchases,
    deleteFirm,
  };
};

export default useStockCalls;
