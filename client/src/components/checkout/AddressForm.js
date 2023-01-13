import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AddressData from "./AddressData";
import { useSelector } from "react-redux";

export default function AddressForm({ setOrderDetails, orderDetils }) {
  const add_store = useSelector((state) => state.address);
  const [selectedAddress, setSelectedAddress] = useState({});

  useEffect(() => {
    setOrderDetails({ ...orderDetils, address: selectedAddress });
  }, [selectedAddress]);

  useEffect(() => {
    if (!selectedAddress.address1 && orderDetils.address) {
      setSelectedAddress(orderDetils.address);
    }
  }, []);

  return (
    <React.Fragment>
      <AddressData
        addressList={add_store}
        setSelectedAddress={setSelectedAddress}
      />
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="H-No"
            name="H-No"
            label={selectedAddress["H-No"] ? "" : "H-No"}
            fullWidth
            value={selectedAddress["H-No"] ? selectedAddress["H-No"] : ""}
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label={selectedAddress["address1"] ? "" : "Address line 1"}
            fullWidth
            value={
              selectedAddress["address1"] ? selectedAddress["address1"] : ""
            }
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            value={
              selectedAddress["address2"] ? selectedAddress["address2"] : ""
            }
            label={selectedAddress["address2"] ? "" : "Address line 2"}
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            value={selectedAddress["city"] ? selectedAddress["city"] : ""}
            label={selectedAddress["city"] ? "" : "City"}
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            value={selectedAddress["state"] ? selectedAddress["state"] : ""}
            label={selectedAddress["state"] ? "" : "State/Province/Region"}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            value={selectedAddress["zip"] ? selectedAddress["zip"] : ""}
            label={selectedAddress["zip"] ? "" : "Zip / Postal code"}
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            value={selectedAddress["country"] ? selectedAddress["country"] : ""}
            label={selectedAddress["country"] ? "" : "Country"}
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
