import React from "react";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "70%",
  maxHeight: "70%",
});

const TypoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  fontSize: "12px",
  overflow: "wrap",
}));

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
    <Paper elevation={4} sx={{ mx: 1 }}>
      <Img src={"http://192.168.0.108:8000" + product.image} alt='' />
      <TypoContainer>
        <Typography>{product.name}</Typography>
        <Typography sx={{fontWeight:600}}>₹{product.price}</Typography>
      </TypoContainer>
    </Paper>
    </Link>
  );
};

export default ProductCard;
