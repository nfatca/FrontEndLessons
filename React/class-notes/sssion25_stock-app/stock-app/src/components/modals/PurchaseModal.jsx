import React from "react";
import { flexColumn, modalStyle } from "../../styles/globalStyles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import useStockCalls from "../../hooks/useStockCalls";
import { useSelector } from "react-redux";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useEffect } from "react";

export default function PurchaseModal({ open, setOpen, info, setInfo }) {
  const { postPurchase, putPurchase, getProCatBrands } = useStockCalls();
  const { products, brands, firms } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    if (info.id) {
      console.log("start put purchase");
      putPurchase(info);
    } else {
      console.log("start post purchase");

      postPurchase(info);
    }
    setInfo({});
  };
  useEffect(() => {
    getProCatBrands();
  }, []);

  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
        setInfo({});
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Box sx={flexColumn} component={"form"} onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <InputLabel variant="outlined" id="firm-select">
              Firm
            </InputLabel>
            <Select
              labelId="firm-select"
              label="Firm"
              id="firm-select"
              name="firm_id"
              value={info?.firm_id || ""}
              onChange={handleChange}
              required
            >
              {firms?.map((firm) => {
                return (
                  <MenuItem key={firm.id} value={firm.id}>
                    {firm.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="outlined" id="brand-select">
              Brands
            </InputLabel>
            <Select
              labelId="brand-select"
              label="Brand"
              id="brand-select"
              name="brand_id"
              value={info?.brand_id || ""}
              onChange={handleChange}
              required
            >
              {brands?.map((brand) => {
                return (
                  <MenuItem key={brand.id} value={brand.id}>
                    {brand.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="outlined" id="product-select">
              Products
            </InputLabel>
            <Select
              labelId="product-select"
              label="product"
              id="product-select"
              name="product_id"
              value={info?.product_id || ""}
              onChange={handleChange}
              required
            >
              {products?.map((product) => {
                return (
                  <MenuItem key={product.id} value={product.id}>
                    {product.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <TextField
            margin="dense"
            label="Quantity"
            name="quantity"
            id="quantity"
            type="number"
            variant="outlined"
            value={info?.quantity || ""}
            onChange={handleChange}
            required
          />
          <TextField
            margin="dense"
            label="Price"
            name="price"
            id="price"
            type="number"
            variant="outlined"
            value={info?.price || ""}
            onChange={handleChange}
            required
          />

          <Button type="submit" variant="contained" size="large">
            Add New Product
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
