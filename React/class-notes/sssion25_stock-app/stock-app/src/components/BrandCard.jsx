import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { CardHeader } from "@mui/material";
import useStockCalls from "../hooks/useStockCalls";
import { btnHoverStyle, FlexCenter, flexRow } from "../styles/globalStyles";

const BrandCard = ({ brand, setOpen, setInfo }) => {
  const { deleteBrand } = useStockCalls();

  return (
    <Card
      elevation={10}
      sx={{
        p: 2,
        maxWidth: "300px",
        maxHeight: "400px",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader title={brand?.name} />

      <CardMedia
        height="325"
        width="250"
        image={brand?.image}
        sx={{ p: 1, objectFit: "contain" }}
        component="img"
        alt="brand-img"
      />

      <CardActions sx={flexRow}>
        <EditIcon
          sx={btnHoverStyle}
          onClick={() => {
            setInfo(brand);
            setOpen(true);
          }}
        />
        <DeleteOutlineIcon
          sx={btnHoverStyle}
          onClick={() => deleteBrand(brand.id)}
        />
      </CardActions>
    </Card>
  );
};

export default BrandCard;
