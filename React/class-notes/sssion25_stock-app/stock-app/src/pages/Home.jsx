import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import Charts from "../components/Charts";
import KpiCards from "../components/KpiCards";
import useStockCalls from "../hooks/useStockCalls";

const Home = () => {
  const { getAllStockData } = useStockCalls();

  // ! Uygulama ilk olarak acildiginda tum stock verilerini paralel olarak getirmeyi baslat
  useEffect(() => {
    getAllStockData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
