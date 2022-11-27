import React from "react";
import { Grid, Paper, Avatar, Typography } from "@mui/material";
import { indigo, pink, amber } from "@mui/material/colors";
import { Box } from "@mui/system";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { flex } from "../styles/globalStyles";
import { useSelector } from "react-redux";

const KpiCards = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  //   const totalSales = sales
  //     ?.map((sale) => +sale.price_total)
  //     .reduce((acc, val) => acc + val, 0);
  //   const totalPurchases = purchases
  //     ?.map((sale) => +sale.price_total)
  //     .reduce((acc, val) => acc + val, 0);

  const totalValue = (data) =>
    data?.map((sale) => +sale.price_total).reduce((acc, val) => acc + val, 0);

  const totalProfit = totalValue(sales) - totalValue(purchases);
  const data = [
    {
      title: "sales",
      metric: `$${totalValue(sales) || ""}`,
      icon: <MonetizationOnIcon sx={{ fontSize: "2.5rem" }} />,
      color: indigo[900],
      bgColor: indigo[100],
    },
    {
      title: "profit",
      metric: `$${totalProfit || ""}`,
      icon: <ShoppingCartIcon sx={{ fontSize: "2.5rem" }} />,
      color: pink[900],
      bgColor: pink[100],
    },
    {
      title: "purchase",
      metric: `$${totalValue(purchases) || ""}`,
      icon: <PaymentsIcon sx={{ fontSize: "2.5rem" }} />,
      color: amber[900],
      bgColor: amber[100],
    },
  ];

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      {data.map((item) => (
        <Grid item key={item.title} sx={{ width: "400px" }}>
          <Paper sx={{ p: 2 }} elevation={10}>
            <Box sx={flex}>
              <Avatar
                sx={{
                  width: "4rem",
                  height: "4rem",
                  color: item.color,
                  backgroundColor: item.bgColor,
                }}
              >
                {item.icon}
              </Avatar>
              <Box sx={{ mx: 4, flexGrow: 1 }}>
                <Typography variant="button">{item.title}</Typography>
                <Typography variant="h4">{item.metric}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default KpiCards;
