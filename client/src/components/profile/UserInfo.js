import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

export default function UserInfo() {
  const userData = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(userData);
  }, [userData]);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const updatedUserInfo = () => {
    // dispatch(UpdatedUserInfo(userInfo));
  };
  return (
    <div>
      <Grid container spacing={6} style={{ width: "40%" }}>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            fullWidth
            value={userInfo.email}
            label={userInfo.email ? "" : "Email"}
            disabled={true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="firstName"
            name="firstName"
            value={userInfo.firstName}
            fullWidth
            label={userInfo.firstName ? "" : "First Name"}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="lastName"
            name="lastName"
            value={userInfo.lastName}
            fullWidth
            label={userInfo.lastName ? "" : "Last Name"}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="primary" onClick={updatedUserInfo}>
            Update Info
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
