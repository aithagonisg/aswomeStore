import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { AddUserAddress } from "../../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";

export default function PermanentAddressForm() {
  const add_store = useSelector((state) => state.address);
  const dispatch = useDispatch();
  const [isPermanentAddressDisabled, setIsPermanentAddressDisabled] =
    useState(false);
  const [editBtnEnable, setEditBtnEnable] = useState(false);
  const [permanentAddressInfo, setPermanentAddressInfo] = useState({});
  const [isStoreData, setIsStoreData] = useState(false);
  const handleAddressChange = (e) => {
    setPermanentAddressInfo({
      ...permanentAddressInfo,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const permanentAdd = add_store?.filter((item) => item.isPermanentAddress);
    if (permanentAdd?.length > 0) {
      setIsPermanentAddressDisabled(true);
      setEditBtnEnable(false);
      setIsStoreData(true);
      setPermanentAddressInfo(permanentAdd[0]);
    } else {
      setEditBtnEnable(true);
    }
  }, [add_store]);

  const setEditFormEnable = () => {
    setIsPermanentAddressDisabled(false);
    setEditBtnEnable(true);
  };

  const handleSavePermanentAddress = () => {
    dispatch(
      AddUserAddress({ ...permanentAddressInfo, isPermanentAddress: true })
    );
  };
  return (
    <div>
      <Grid container spacing={6} style={{ width: "50%" }}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="H-No"
            name="H-No"
            label={permanentAddressInfo["H-No"] ? "" : "H-No"}
            fullWidth
            value={permanentAddressInfo["H-No"]}
            autoComplete="given-name"
            disabled={isPermanentAddressDisabled}
            onChange={handleAddressChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label={permanentAddressInfo["address1"] ? "" : "Address line 1"}
            fullWidth
            value={permanentAddressInfo["address1"]}
            autoComplete="shipping address-line1"
            disabled={isPermanentAddressDisabled}
            onChange={handleAddressChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            value={permanentAddressInfo["address2"]}
            label={permanentAddressInfo["address2"] ? "" : "Address line 2"}
            fullWidth
            autoComplete="shipping address-line2"
            disabled={isPermanentAddressDisabled}
            onChange={handleAddressChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            value={permanentAddressInfo["city"]}
            label={permanentAddressInfo["city"] ? "" : "City"}
            fullWidth
            autoComplete="shipping address-level2"
            disabled={isPermanentAddressDisabled}
            onChange={handleAddressChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            value={permanentAddressInfo["state"]}
            label={permanentAddressInfo["state"] ? "" : "State/Province/Region"}
            fullWidth
            disabled={isPermanentAddressDisabled}
            onChange={handleAddressChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            value={permanentAddressInfo["zip"]}
            label={permanentAddressInfo["zip"] ? "" : "Zip / Postal code"}
            fullWidth
            autoComplete="shipping postal-code"
            disabled={isPermanentAddressDisabled}
            onChange={handleAddressChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            value={permanentAddressInfo["country"]}
            label={permanentAddressInfo["country"] ? "" : "Country"}
            fullWidth
            autoComplete="shipping country"
            disabled={isPermanentAddressDisabled}
            onChange={handleAddressChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            disabled={editBtnEnable}
            onClick={() => setEditFormEnable(true)}
          >
            Edit Address
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            disabled={!editBtnEnable}
            onClick={handleSavePermanentAddress}
          >
            {isStoreData ? "Update Address" : "Add Address"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
