import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Box } from "@mui/system";
import ProductCard from "./ProductCard";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material";

const ProductContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  display: "flex",
  flexDirection: "row",
}));

const TypoContainer = styled("div")(({ theme }) => ({
  color: alpha(theme.palette.common.black, 1),
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  "& .MuiTypography-root": {
    fontSize: "30px",
    fontWeight: "600",
  },
  overflow: "wrap",
}));

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <Fragment>
      <MetaData title='ShopNext' />
      {loading ? (
        <Loader />
      ) : (
        <Box sx={{ width: "100%" }}>
          <Paper elevation={1}>
            <TypoContainer sx={{ paddingTop: 2 }}>
              <Typography>Welcome to MyShop</Typography>
            </TypoContainer>
            <ProductContainer>
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </ProductContainer>
          </Paper>
        </Box>
      )}
    </Fragment>
  );
};

export default HomeScreen;
