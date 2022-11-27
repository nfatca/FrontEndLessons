import React from "react";
import { LineChart } from "@tremor/react";
import { Card, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);
  const dataFormatter = (number) =>
    `$${Intl.NumberFormat("us").format(number).toString()}`;

  const salesData = sales?.map((sale) => ({
    date: sale.createds,
    sales: +sale.price_total,
  }));

  const purchasesData = purchases?.map((sale) => ({
    date: sale.createds,
    purchases: +sale.price_total,
  }));
  return (
    <Grid container justifyContent="center" spacing={2} mt={3}>
      <Grid item xs={12} md={6}>
        <Card sx={{ p: 2 }}>
          <Typography> Daily Sales (USD)</Typography>
          <LineChart
            data={salesData}
            dataKey="date"
            categories={["sales"]}
            colors={["blue"]}
            valueFormatter={dataFormatter}
            marginTop="mt-6"
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ p: 2 }}>
          <Typography> Daily Purchases (USD)</Typography>
          <LineChart
            data={purchasesData}
            dataKey="date"
            categories={["purchases"]}
            colors={["red"]}
            valueFormatter={dataFormatter}
            marginTop="mt-6"
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Charts;
