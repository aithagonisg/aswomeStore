import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function PaymentCard({ cardInfo }) {
  const classes = useStyles();
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {cardInfo.cardName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {cardInfo.cardNumber}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          expire: {cardInfo.expDate}, cvv: {cardInfo.cvv}
        </Typography>
      </CardContent>
    </Card>
  );
}
