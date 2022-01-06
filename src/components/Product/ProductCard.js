import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, styled } from "@mui/system";



const TypoContainer = styled("div")(({ theme }) => ({
    padding:theme.spacing(0,10,0,5),
  display: "flex",
  flexDirection: "column",
  textAlign: "justify",
  textAlignLast:"left",
  //   "& .MuiTypography-root": {
  //     fontSize: "14px",
  //     fontWeight: "400",
  //   },
  overflow: "wrap",
}));
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  padding: "5% 10% 5% 5%", 
});


const ProductCard = ({ product }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",

        overflow: "wrap",
      }}
    >
       
      <Img
        component='img'
        src={"http://192.168.0.108:8000" + product.image}
        alt='Product Image'
      />
    

      <TypoContainer>
        <Typography sx={{ fontSize: "10px", color: "#d6660b" }}>
          Visit brand: {product.brand}
        </Typography>
        <Typography variant='h5'>{product.name}</Typography>
        <br />
        <Box variant='span'>
          <Typography sx={{display:"inline", color: "#80766e"}} >Price:</Typography>
          <Typography sx={{display:"inline", component:"span", color: "#4f1920", fontWeight:600}}>₹{product.price}</Typography>
        </Box>
        <br />
          <Typography>{product.description}</Typography>
          <br />
          <Button variant="contained" size="small">Add to Cart</Button>
      </TypoContainer>
    </Box>
  );
};

export default ProductCard;
