import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import ProductModal from "../components/modals/ProductModal";
import MultiSelect from "../components/MultiSelect";
import ProductsTable from "../components/tables/ProductsTable";

const Products = () => {
  const { getProCatBrands } = useStockCalls();
  const { products, brands } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    getProCatBrands();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Products
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        New Product
      </Button>

      <MultiSelect
        data1={brands}
        data2={products}
        key1="name"
        key2="brand"
        firstNames={selectedBrands}
        setFirstNames={setSelectedBrands}
        setSecondNames={setSelectedProducts}
      />

      <ProductModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      />

      {products?.length > 0 && (
        <ProductsTable
          selectedProducts={selectedProducts}
          selectedBrands={selectedBrands}
        />
      )}
    </Box>
  );
};

export default Products;
