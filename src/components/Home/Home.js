import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Box } from "@mui/system";
import ProductCard from "./ProductCard";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const  productList  = useSelector((state) => state.productList);
  const { products, loading } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title='ShopNext' />
          <div>
            <p>Welcome to MyShop</p>
            <h1>Find Amazing Products Below</h1>
            <Box>
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </Box>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default HomeScreen;
