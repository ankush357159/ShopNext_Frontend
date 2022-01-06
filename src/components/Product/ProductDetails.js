import { Paper} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductDetails } from "../../actions/productActions";
import ProductCard from "./ProductCard";



const ProductDetails = ({match}) => {
    const dispatch = useDispatch()
    const {product} = useSelector((state)=>state.productDetails)

    useEffect(()=>{
        dispatch(getProductDetails(match.params.id))
    },[dispatch, match.params.id])

  console.log(product);

  return <Paper elevation={3} sx={{maxWidth: "90%", marginLeft:"5%", marginTop:"4%"}}><ProductCard product={product}/></Paper>;
};

export default ProductDetails;
