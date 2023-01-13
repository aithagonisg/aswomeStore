import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { cartTotal } from "../../utils/cartTotalValue";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review({ setOrderDetails, orderDetils }) {
  const classes = useStyles();

  const products = useSelector((state) => state.cart);
  const payments = Object.keys(orderDetils.card);
  const addresses = Object.keys(orderDetils.address);
  useEffect(() => {
    setOrderDetails({ ...orderDetils, cart: products });
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products?.map((product) => (
          <ListItem className={classes.listItem} key={product.product_category}>
            <ListItemText
              primary={product.product_category}
              secondary={product.productDetails.Description}
            />
            <Typography variant="body2">
              {product.productDetails.price}
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {products ? cartTotal(products) : 0}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {addresses?.map((add) => (
              <div>{orderDetils.address[add]}</div>
            ))}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments?.map((payment) => (
              <React.Fragment key={payment}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>
                    {orderDetils.card[payment]}
                  </Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
