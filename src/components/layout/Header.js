import React from "react";
import { AppBar, InputBase, Toolbar, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const AppbarContainer = styled("div")(({ theme }) => ({
  position: "relative",
  "& .css-1rg09f3 .MuiToolbar-root": {
    padding: theme.spacing(1, 2, 0, 1),
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  backgroundColor: alpha(theme.palette.common.white, 0.3),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.6),
    width: "75%",
  },
  borderRadius: theme.shape.borderRadius
}));

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,

}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  paddingTop: "4px",
  alignItems: "center",
  position: "absolute",
}));

const InputContainer = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  marginRight: "5px",
  width: "100%",
}));

const UserContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexgrow: 1,
  justifyContent: "flex-between",
}));

const UserWrapper = styled("div")(({ theme }) => ({
  paddingInline: "5px",
  padding: theme.spacing(0, 5),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "&: hover": {
    border: "1px solid #fff"
}
}));

const OrderWrapper = styled("div")(({ theme }) => ({
  paddingInline: "5px",
  padding: theme.spacing(0, 5),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
}));

const CartWrapper = styled("div")(({ theme }) => ({
  paddingInline: "5px",
  padding: theme.spacing(0, 5),
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "center",
}));

const Header = () => {
  return (
    <AppbarContainer>
      <AppBar position='static' sx={{ background: "#2c2e33" }}>
        <Toolbar>
          <SearchContainer>
            <Typography variant='h5' sx={{ px: 2 }}>
              ShopNext
            </Typography>
            <Search>
              <InputContainer placeholder='search..' />
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
          </SearchContainer>
          <UserContainer>
            <UserWrapper>
              <Typography>Welcome </Typography>
              <Typography> Guest</Typography>
            </UserWrapper>
            <OrderWrapper>
              <Typography sx={{fontSize: "12px"}}>Returns</Typography>
              <Typography>& Orders</Typography>
            </OrderWrapper>
            <CartWrapper>
              <ShoppingCartOutlinedIcon />
              <Typography>Cart</Typography>
            </CartWrapper>
          </UserContainer>
        </Toolbar>
      </AppBar>
    </AppbarContainer>
  );
};

export default Header;
