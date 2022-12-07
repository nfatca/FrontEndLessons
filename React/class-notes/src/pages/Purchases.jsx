import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import EditIcon from "@mui/icons-material/Edit";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";

import { useSelector } from "react-redux";
import {
  arrowStyle,
  btnHoverStyle,
  selectedFlex,
} from "../styles/globalStyles";
import useSortColumn from "../hooks/useSortColumn";
import { MultiSelectBox, MultiSelectBoxItem } from "@tremor/react";
import PurchaseModal from "../components/modals/PurchaseModal";

const Purchases = () => {
  const {
    getProCatBrands,
    getPurchases,
    // getBrands,
    // getProducts,
    deletePurchases,
  } = useStockCalls();
  const { purchases, brands, products } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  useEffect(() => {
    // getBrands();
    // getCategories();
    // getProducts();
    getPurchases();
    getProCatBrands();
  }, []);

  const columnObj = {
    date: 1,
    quantity: 1,
    amount: 1,
  };

  const { sortedData, handleSort, columns } = useSortColumn(
    purchases,
    columnObj
  );
  console.log(purchases);

  const isBrandSelected = (item) =>
    selectedBrands.includes(item.brand) || selectedBrands.length === 0;

  const isProductSelected = (item) =>
    selectedProducts.includes(item.product) || selectedProducts.length === 0;

  //? products dizisinden secilmis brand'larin product name'lerini bir diziye saklar
  const filtredProducts = products
    ?.filter((item) => selectedBrands?.includes(item.brand))
    .map((item) => item.name);
  return (
    <div>
      <Typography variant="h4" color="error" mb={4}>
        Purchases
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        New Purchase
      </Button>
      <Box sx={selectedFlex} mt={3}>
        <MultiSelectBox
          handleSelect={(item) => setSelectedBrands(item)}
          placeholder="Select Brand"
        >
          {brands?.map((item) => (
            <MultiSelectBoxItem
              key={item.name}
              value={item.name}
              text={item.name}
            />
          ))}
        </MultiSelectBox>
        <MultiSelectBox
          handleSelect={(item) => setSelectedProducts(item)}
          placeholder="Select Product"
        >
          {filtredProducts?.map((item) => (
            <MultiSelectBoxItem key={item} value={item} text={item} />
          ))}
        </MultiSelectBox>
      </Box>

      <PurchaseModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      />

      {sortedData?.length > 0 && (
        <TableContainer component={Paper} sx={{ mt: 3 }} elevation={10}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Box sx={arrowStyle} onClick={() => handleSort("date")}>
                    <div>Date</div>
                    {columns.date === 1 && <UpgradeIcon />}
                    {columns.date !== 1 && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Firm Name</TableCell>
                <TableCell align="center">Brand Name</TableCell>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">
                  <Box sx={arrowStyle} onClick={() => handleSort("quantity")}>
                    <div>Quantity</div>
                    {columns.quantity === 1 && <UpgradeIcon />}
                    {columns.quantity !== 1 && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">
                  <Box sx={arrowStyle} onClick={() => handleSort("amount")}>
                    <div>Amount</div>
                    {columns.amount === 1 && <UpgradeIcon />}
                    {columns.amount !== 1 && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">Operation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData
                ?.filter((item) => isBrandSelected(item))
                .filter((item) => isProductSelected(item))
                .map((purchase, index) => (
                  <TableRow key={index}>
                    <TableCell align="center" component="th" scope="row">
                      {purchase.createds}
                    </TableCell>
                    <TableCell align="center">
                      {purchase.category.name}
                    </TableCell>
                    <TableCell align="center">{purchase.firm}</TableCell>
                    <TableCell align="center">{purchase.brand}</TableCell>
                    <TableCell align="center">{purchase.product}</TableCell>
                    <TableCell align="center">{purchase.quantity}</TableCell>
                    <TableCell align="center">${purchase.price}</TableCell>
                    <TableCell align="center">
                      ${purchase.price_total}
                    </TableCell>
                    <TableCell align="center">
                      <EditIcon
                        sx={btnHoverStyle}
                        onClick={() => {
                          setOpen(true);
                          setInfo(purchase);
                        }}
                      />

                      <DeleteIcon
                        sx={btnHoverStyle}
                        onClick={() => deletePurchases(purchase.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Purchases;
