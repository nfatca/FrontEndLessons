import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { FlexCenter, modalStyle } from "../../styles/globalStyles";

export default function FirmModal({ open, setOpen, info, setInfo }) {
  const handleSubmit = (e) => {
    e.preventefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box component="form" onSubmit={handleSubmit} sx={FlexCenter}>
            <TextField
              margin="dense"
              label="Firm name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info?.name || ""}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              label="Phone"
              name="phone"
              id="phone"
              type="text"
              variant="outlined"
              value={info?.phone || ""}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info?.address || ""}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              label="Image"
              name="image"
              id="image"
              type="text"
              variant="outlined"
              value={info?.image || ""}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained">
              Submit Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
