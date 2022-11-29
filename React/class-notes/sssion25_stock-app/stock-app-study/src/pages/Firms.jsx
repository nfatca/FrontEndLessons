import useStockCalls from "../hooks/useStockCalls";
import { useEffect } from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";

const Firms = () => {
  const { getFirms } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    getFirms();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="secondary" mb={4}>
        Firms
      </Typography>
      <Button variant="contained"> New Firm</Button>
      {firms?.length > 0 && (
        <Grid container justifyContent="center" gap={3}>
          {firms.map((firm) => (
            <Grid item key={firm.id}>
              <FirmCard firm={firm} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Firms;
