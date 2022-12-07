import { Grid, Paper, Typography, Avatar, Box } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { indigo, pink, amber } from "@mui/material/colors";
import { useSelector } from "react-redux";

const KpiCards = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  // const totalSales = sales
  //   ?.map((sale) => Number(sale.price_total))
  //   .reduce((acc, val) => acc + val, 0);

  // const totalPurchases = purchases
  //   ?.map((purchase) => Number(purchase.price_total))
  //   .reduce((acc, val) => acc + val, 0);

  const total = (data) =>
    data
      ?.map((item) => Number(item.price_total))
      .reduce((acc, val) => acc + val, 0);

  const totalProfit = total(sales) - total(purchases);

  const data = [
    {
      title: "sales",
      metric: `$${total(sales) || ""}`,
      icon: <MonetizationOnIcon sx={{ fontSize: "3rem" }} />,
      color: indigo[900],
      bgColor: indigo[100],
    },
    {
      title: "profit",
      metric: `$${totalProfit || ""}`,
      icon: <PaymentsIcon sx={{ fontSize: "3rem" }} />,
      color: pink[900],
      bgColor: pink[100],
    },
    {
      title: "purchases",
      metric: `$${total(purchases) || ""}`,
      icon: <ShoppingCartIcon sx={{ fontSize: "3rem" }} />,
      color: amber[900],
      bgColor: amber[100],
    },
  ];

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={1}>
      {data.map((item) => (
        <Grid
          item
          key={item.title}
          xs={12}
          sm={10}
          md={6}
          lg={4}
          sx={{ minWidth: "250px" }}
        >
          <Paper sx={{ p: 2 }} elevation={10}>
            <Box sx={{ display: "flex" }}>
              <Avatar
                sx={{
                  width: "4rem",
                  height: "4rem",
                  color: item.color,
                  backgroundColor: item.bgColor,
                  my: "auto",
                  mx: 2,
                }}
              >
                {item.icon}
              </Avatar>
              <Box sx={{ mx: 3 }}>
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
