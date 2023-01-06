import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import InputBase from "@material-ui/core/InputBase";
import "./Header.css";
import { alpha, makeStyles } from "@material-ui/core";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserInfo from "./UserInfo";
//before login/register and after login/register

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  const { info } = useSelector((state) => state.userInfo);
  const classes = useStyles();
  return (
    <div className="header-container">
      <div className="header-left-panel">
        <div>
          <Link to="/">
            <Avatar variant="square">
              <img src={logo} height="78px" />
            </Avatar>
          </Link>
        </div>
      </div>
      <div className="header-center-panel">
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </div>
      <div className="header-right-panel">
        {!info.token ? (
          <>
            <div>
              <Link
                to="/contact"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </div>
            <div>
              <Link
                to="/about"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                About Us
              </Link>
            </div>
            <div>
              <Link
                to="/login"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Login/register
              </Link>
            </div>
          </>
        ) : (
          <UserInfo userInfo={info} />
        )}
      </div>
    </div>
  );
}
