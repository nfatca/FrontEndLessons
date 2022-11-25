import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
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
import ProductModal from "../components/modals/ProductModal";

const Purchases = () => {
  const { deleteProduct, getPurchases, getProCatBrands } = useStockCalls();
  const { purchases, products, brands } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    // getBrands();
    // getCategories();
    // getProducts();
    // getPurchases();
    getProCatBrands();
  }, []);
  console.log(purchases);
  const columnObj = {
    created: 1,
    quantity: 1,
    amount: 1,
  };

  const { sortedData, handleSort, columns } = useSortColumn(
    purchases,
    columnObj
  );

  //? Verilen item secilen brand'larin icerisinde varsa true dondurur
  //? VEYA hic brand secilmemisse true dondurur.aksinde false dondurur.
  //? bu fonksiyon filter() icerisinde yazilacagi icin false dondurmesi
  //? durumunda filter bir suzme yapmamis olur.
  const isBrandSelected = (item) =>
    selectedBrands.includes(item.brand) || selectedBrands.length === 0;

  const isProductSelected = (item) =>
    selectedProducts.includes(item.product) || selectedProducts.length === 0;

  //? products dizisinden secilmis brand'larin product name'lerini bir diziye saklar
  const filtredProducts = purchases
    ?.filter((item) => selectedBrands?.includes(item.brand))
    .map((item) => item.product);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Purchases
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        New Purchases
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

      {/* <ProductModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      /> */}

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
                  <Box sx={arrowStyle} onClick={() => handleSort("number")}>
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
                .map((product, index) => (
                  <TableRow
                    key={product.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{product.created}</TableCell>
                    <TableCell align="center">{product.category}</TableCell>
                    <TableCell align="center">{product.firm}</TableCell>
                    <TableCell align="center">{product.brand}</TableCell>
                    <TableCell align="center">{product.product}</TableCell>
                    <TableCell align="center">{product.quantity}</TableCell>
                    <TableCell align="center">{product.price}</TableCell>
                    <TableCell align="center">{product.price_total}</TableCell>
                    <TableCell
                      align="center"
                      onClick={() => deleteProduct(product.id)}
                    >
                      <DeleteIcon sx={btnHoverStyle} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Purchases;
