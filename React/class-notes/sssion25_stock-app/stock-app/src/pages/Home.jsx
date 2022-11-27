import useStockCalls from "../hooks/useStockCalls";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import KpiCards from "../components/KpiCards";
import Charts from "../components/Charts";

const Home = () => {
  const { getPurchases, getSales } = useStockCalls();
  useEffect(() => {
    getPurchases();
    getSales();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Dashboard
      </Typography>
      <KpiCards />
      <Charts />
    </Box>
  );
};

export default Home;
