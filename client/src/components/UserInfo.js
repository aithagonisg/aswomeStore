import React, { useEffect } from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { setCartAndOrderList, setUserInfo } from "../store/actions/actions";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function UserInfo({ userInfo }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userName, setUserName] = React.useState("");
  const [cartBadge, setCartBadge] = React.useState(0);
  const { cart } = useSelector((state) => state.cartAndOrder);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    dispatch(setCartAndOrderList());
  }, []);

  useEffect(() => {
    setUserName(
      userInfo.firstName.toUpperCase().charAt(0) +
        userInfo.lastName.toUpperCase().charAt(0)
    );
  }, [userInfo]);

  useEffect(() => {
    setCartBadge(cart?.cart.length);
  }, [cart]);

  const handleLogout = () => {
    dispatch(setUserInfo({}));
    localStorage.clear();
    handleClose();
  };
  return (
    <div className="userInfo">
      <IconButton aria-label="cart" style={{ color: "#fff" }}>
        <StyledBadge badgeContent={cartBadge} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <div className="userName">
        {userInfo.firstName + " " + userInfo.lastName}
      </div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "#fff" }}
      >
        <Avatar>{userName}</Avatar>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
