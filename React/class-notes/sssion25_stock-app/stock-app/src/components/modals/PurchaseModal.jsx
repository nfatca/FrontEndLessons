import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import useStockCalls from "../../hooks/useStockCalls";
import { useSelector } from "react-redux";
import { flexColumn, modalStyle } from "../../styles/globalStyle";

export default function ModalPurchase({ open, setOpen, info, setInfo }) {
  const navigate = useNavigate();
  const { putPurchase, postPurchase } = useStockCalls();
  const { firms, brands, products } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: Number(value) });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (info.id) {
      putPurchase(info);
    } else {
      postPurchase(info);
    }
    setOpen(false);
    setInfo({});
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Box sx={flexColumn} component={"form"} onSubmit={handleSubmit}>
          <FormControl>
            <InputLabel variant="outlined" id="firm-select-label">
              Firm
            </InputLabel>
            <Select
              labelId="firm-select-label"
              label="Firm"
              name="firm_id"
              value={info?.firm_id || ""}
              onChange={handleChange}
              required
            >
              <MenuItem onClick={() => navigate("/stock/firms")}>
                Add New Firm
              </MenuItem>
              <hr />
              {firms?.map((item) => {
                return (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel variant="outlined" id="brand-select-label">
              Brand
            </InputLabel>
            <Select
              labelId="brand-select-label"
              label="Brand"
              id="brand-select"
              name="brand_id"
              value={info?.brand_id || ""}
              onChange={handleChange}
              required
            >
              <MenuItem onClick={() => navigate("/stock/brands")}>
                Add New Brand
              </MenuItem>
              <hr />
              {brands?.map((item) => {
                return (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel variant="outlined" id="product-select-label">
              Product
            </InputLabel>
            <Select
              labelId="product-select-label"
              label="Product"
              id="product-select"
              name="product_id"
              value={info?.product_id || ""}
              onChange={handleChange}
              required
            >
              <MenuItem onClick={() => navigate("/stock/products")}>
                Add New Product
              </MenuItem>
              <hr />
              {products?.map((item) => {
                return (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <TextField
            label="Quantity"
            id="quantity"
            name="quantity"
            type="number"
            variant="outlined"
            InputProps={{ inputProps: { min: 0 } }}
            value={info?.quantity || ""}
            onChange={handleChange}
            required
          />
          <TextField
            label="Price"
            id="price"
            type="number"
            variant="outlined"
            name="price"
            InputProps={{ inputProps: { min: 0 } }}
            value={info?.price || ""}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" size="large">
            {info?.id ? "Update Purchase" : "Add New Purchase"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
