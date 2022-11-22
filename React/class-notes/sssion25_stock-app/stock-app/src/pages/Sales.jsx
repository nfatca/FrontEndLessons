import { useEffect } from "react";
import useStockCalls from "../hooks/useStockCalls";

const Sales = () => {
  const { getSales } = useStockCalls();

  useEffect(() => {
    getSales();
  }, []);
  return <div>Sales</div>;
};

export default Sales;
