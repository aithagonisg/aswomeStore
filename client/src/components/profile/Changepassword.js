import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../services/API";
import { setUserInfo, showProgress } from "../../store/actions/actions";
import { useHistory } from "react-router-dom";
export default function Changepassword() {
  const history = useHistory();
  const [passwordData, setPasswordData] = useState({});

  const [isBtnDisable, setIsBtnDisable] = useState(false);

  const [visiblePassword, setVisiblePassword] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (
      Object.keys(passwordData).length > 2 &&
      passwordData?.password === passwordData?.confirmpassword
    ) {
      setIsBtnDisable(true);
    } else {
      setIsBtnDisable(false);
    }
  }, [passwordData]);

  const Updatepassword = () => {
    //make api call if only passwords are correct
    updatePassword(passwordData)
      .then((res) => res.json())
      .then((res) => {
        dispatch(showProgress(true));
        setTimeout(() => {
          dispatch(setUserInfo({}));
          localStorage.clear();
          dispatch(showProgress(false));
          history.push("/login");
        }, 2000);
      });
  };
  return (
    <div>
      <Grid container spacing={6} style={{ width: "40%" }}>
        <Grid item xs={12}>
          <TextField
            required
            id="oldpassword"
            name="oldpassword"
            fullWidth
            label="old password"
            type={visiblePassword ? "text" : "password"}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="newpassword"
            name="password"
            fullWidth
            label="new password"
            type={visiblePassword ? "text" : "password"}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="confirmpassword"
            name="confirmpassword"
            fullWidth
            type={visiblePassword ? "text" : "password"}
            label="confirm password"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
        <IconButton
          aria-label="toggle password visibility"
          onClick={() => setVisiblePassword(!visiblePassword)}
          edge="end"
        >
          {visiblePassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
        <Grid item xs={12} sm={5}>
          <Button
            variant="contained"
            color="primary"
            disabled={!isBtnDisable}
            onClick={Updatepassword}
          >
            Update Password
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
