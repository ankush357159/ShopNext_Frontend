import React from "react";
import { Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductCard = ({ product }) => {
  return (
    <Link className='productCard' to='/'>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>{product.name}</Item>
         
        </Grid>
      
      </Grid>
    </Link>
  );
};

export default ProductCard;
