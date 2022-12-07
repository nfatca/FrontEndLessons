// import { axiosWithToken } from "../service/axiosInstance";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getSuccess,
  getProCatBrandsSuccess,
} from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  //!------------- GET CALLS ----------------
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getFirms = () => getStockData("firms");
  const getSales = () => getStockData("sales");
  const getCategories = () => getStockData("categories");
  const getBrands = () => getStockData("brands");
  const getProducts = () => getStockData("products");
  const getPurchases = () => getStockData("purchases");

  const getProCatBrands = async () => {
    dispatch(fetchStart());
    try {
      const [products, categories, brands, purchases, firms] =
        await Promise.all([
          axiosWithToken.get("stock/products/"),
          axiosWithToken.get("stock/categories/"),
          axiosWithToken.get("stock/brands/"),
          axiosWithToken.get("stock/purchases/"),
          axiosWithToken.get("stock/firms/"),
        ]);
      dispatch(
        getProCatBrandsSuccess([
          products?.data,
          categories?.data,
          brands?.data,
          purchases?.data,
          firms?.data,
        ])
      );
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  //!------------- DELETE CALLS ----------------
  const deleteStockData = async (url, id) => {
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`${url} successfuly deleted`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be deleted`);
    }
  };

  const deleteFirm = (id) => deleteStockData("firms", id);
  const deleteBrand = (id) => deleteStockData("brands", id);
  const deleteProduct = (id) => deleteStockData("products", id);
  const deletePurchases = (id) => deleteStockData("purchases", id);
  //!------------- POST CALLS ----------------
  const postStockData = async (info, url) => {
    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      toastSuccessNotify(`${url} successfuly added`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be added`);
    }
  };

  const postFirm = (info) => postStockData(info, "firms");
  const postBrand = (info) => postStockData(info, "brands");
  const postPurchase = (info) => postStockData(info, "purchases");

  //!------------- PUT CALLS ----------------
  const putStockData = async (info, url) => {
    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
      toastSuccessNotify(`${url} successfuly updated`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be updated`);
    }
  };

  const putFirm = (info) => putStockData(info, "firms");
  const putBrand = (info) => putStockData(info, "brands");
  const putPurchase = (info) => putStockData(info, "purchases");

  return {
    getStockData,
    getFirms,
    getSales,
    getCategories,
    getProducts,
    getBrands,
    getPurchases,
    getProCatBrands,
    deleteFirm,
    deleteBrand,
    deleteProduct,
    deletePurchases,
    postFirm,
    postStockData,
    postBrand,
    postPurchase,
    putFirm,
    putStockData,
    putBrand,
    putPurchase,
  };
};

export default useStockCalls;
