import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars() {
  const { duration, message, open, severity } = useSelector(
    (state) => state.toaster
  );
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={duration}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
    </div>
  );
}
