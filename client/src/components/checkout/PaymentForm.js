import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardData from "./PaymentData";
import { useSelector } from "react-redux";

export default function PaymentForm({ setOrderDetails, orderDetils }) {
  const cardDetails = useSelector((state) => state.cardDetails);
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    setOrderDetails({ ...orderDetils, card: selectedCard });
  }, [selectedCard]);
  useEffect(() => {
    if (!selectedCard.cadrName && orderDetils.card) {
      setSelectedCard(orderDetils.card);
    }
  }, []);

  return (
    <React.Fragment>
      <CardData cardList={cardDetails} setSelectedCard={setSelectedCard} />
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            value={selectedCard["cardName"] ? selectedCard["cardName"] : ""}
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            value={selectedCard["cardNumber"] ? selectedCard["cardNumber"] : ""}
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            value={selectedCard["expDate"] ? selectedCard["expDate"] : ""}
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            value={selectedCard["cvv"] ? selectedCard["cvv"] : ""}
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
