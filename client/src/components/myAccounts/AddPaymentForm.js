import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { AddCardDetails } from "../../store/actions/actions";

export default function AddPaymentForm() {
  const cardDetails = useSelector((state) => state.cardDetails);
  const [isPaymentDataAvailable, setIsPaymentDataAvailable] = useState(false);
  const [paymentCardDetails, setPaymentCardDetails] = useState({});
  const [isFormDataEditable, setIsFormDataEditable] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cardDetails?.length > 0) {
      setIsPaymentDataAvailable(true);
      setPaymentCardDetails(cardDetails[0]);
      setIsFormDataEditable(false);
    } else {
      setIsPaymentDataAvailable(false);
      setIsFormDataEditable(true);
    }
  }, [cardDetails]);

  const handleChange = (e) => {
    setPaymentCardDetails({
      ...paymentCardDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(AddCardDetails(paymentCardDetails));
  };

  const handleChangeFormEditable = () => {
    setIsFormDataEditable(true);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add Payment Details
      </Typography>
      <Grid container spacing={3} style={{ width: "50%" }}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            name="cardName"
            label="Name on card"
            fullWidth
            value={
              paymentCardDetails["cardName"]
                ? paymentCardDetails["cardName"]
                : ""
            }
            autoComplete="cc-name"
            onChange={handleChange}
            disabled={!isFormDataEditable}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            fullWidth
            value={
              paymentCardDetails["cardNumber"]
                ? paymentCardDetails["cardNumber"]
                : ""
            }
            autoComplete="cc-number"
            onChange={handleChange}
            disabled={!isFormDataEditable}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            name="expDate"
            label="Expiry date"
            fullWidth
            value={
              paymentCardDetails["expDate"] ? paymentCardDetails["expDate"] : ""
            }
            autoComplete="cc-exp"
            onChange={handleChange}
            disabled={!isFormDataEditable}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            value={paymentCardDetails["cvv"] ? paymentCardDetails["cvv"] : ""}
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            onChange={handleChange}
            disabled={!isFormDataEditable}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {isPaymentDataAvailable && (
            <Button
              variant="contained"
              disabled={!isPaymentDataAvailable}
              onClick={handleChangeFormEditable}
            >
              Edit Deatils
            </Button>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!isFormDataEditable}
          >
            {isPaymentDataAvailable ? "Update Details" : "Add Details"}
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
