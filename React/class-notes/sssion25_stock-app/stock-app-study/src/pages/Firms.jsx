import axios from "axios";
import useStockCalls from "../hooks/useStockCalls";
import { useEffect } from "react";

const Firms = () => {
  const { getFirms } = useStockCalls();

  useEffect(() => {
    getFirms();
  }, []);

  return <div>Firms</div>;
};

export default Firms;
