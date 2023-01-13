import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { AddUserAddress } from "../../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";

export default function CurrentAddressForm() {
  const add_store = useSelector((state) => state.address);
  const dispatch = useDispatch();
  const [isPermanentAddressDisabled, setIsPermanentAddressDisabled] =
    useState(false);
  const [editBtnEnable, setEditBtnEnable] = useState(false);
  const [permanentAddressInfo, setPermanentAddressInfo] = useState({});
  const [isStoreData, setIsStoreData] = useState(false);
  const [onCheck, setOnCheck] = useState(false);
  const handleAddressChange = (e) => {
    setPermanentAddressInfo({
      ...permanentAddressInfo,
      [e.target.name]: e.target.value,
    });
  };
  const currentAdd = add_store?.filter((item) => !item.isPermanentAddress);
  useEffect(() => {
    if (currentAdd?.length > 0) {
      setIsPermanentAddressDisabled(true);
      setEditBtnEnable(false);
      setIsStoreData(true);
      setPermanentAddressInfo(currentAdd[0]);
    } else {
      setEditBtnEnable(true);
    }
  }, [add_store]);

  useEffect(() => {
    if (onCheck) {
      const permanentAdd = add_store.filter((item) => item.isPermanentAddress);
      if (permanentAdd.length > 0) {
        setPermanentAddressInfo(permanentAdd[0]);
      }
    } else {
      setPermanentAddressInfo({});
    }
  }, [onCheck]);
  const setEditFormEnable = () => {
    setIsPermanentAddressDisabled(false);
    setEditBtnEnable(true);
  };

  const handleSavePermanentAddress = () => {
    dispatch(
      AddUserAddress({ ...permanentAddressInfo, isPermanentAddress: false })
    );
  };
  return (
    <div>
      <Grid container spacing={3} style={{ width: "50%" }}>
        {currentAdd?.length <= 0 && (
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  name="saveAddress"
                  value={onCheck}
                  onClick={() => setOnCheck(!onCheck)}
                />
              }
              label="same as permanent Address"
            />
          </Grid>
        )}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="H-No"
            name="H-No"
            label="H-No"
            fullWidth
            value={
              permanentAddressInfo["H-No"] ? permanentAddressInfo["H-No"] : ""
            }
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
            label={"Address line 1"}
            fullWidth
            value={
              !permanentAddressInfo["address1"]
                ? ""
                : permanentAddressInfo["address1"]
            }
            autoComplete="shipping address-line1"
            disabled={isPermanentAddressDisabled}
            onChange={handleAddressChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            value={
              !permanentAddressInfo["address2"]
                ? ""
                : permanentAddressInfo["address2"]
            }
            label={"Address line 2"}
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
            value={
              !permanentAddressInfo["city"] ? "" : permanentAddressInfo["city"]
            }
            label={"City"}
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
            value={
              !permanentAddressInfo["state"]
                ? ""
                : permanentAddressInfo["state"]
            }
            label={"State/Province/Region"}
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
            value={
              !permanentAddressInfo["zip"] ? "" : permanentAddressInfo["zip"]
            }
            label={"Zip / Postal code"}
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
            value={
              !permanentAddressInfo["country"]
                ? ""
                : permanentAddressInfo["country"]
            }
            label={"Country"}
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
