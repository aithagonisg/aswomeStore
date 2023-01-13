import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector } from "react-redux";
import ProductCard from "../Card";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  className: {
    width: 250,
    margin: 10,
    height: 200,
    position: "relative",
  },
  media: {
    height: 90,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    padding: "5px",
  },
}));

const SummeryDeatils = ({ cart }) => {
  const classes = useStyles();
  return (
    <span style={{ display: "flex", flexWrap: "wrap" }}>
      {cart?.map((item) => (
        <AccordionDetails>
          <ProductCard
            cardInfo={item}
            className={classes.className}
            media={classes.media}
          />
        </AccordionDetails>
      ))}
    </span>
  );
};

export default function OrderDetails() {
  const classes = useStyles();
  const orderDetails = useSelector((state) => state.orders);

  return (
    <div className={classes.root}>
      {orderDetails?.map((item) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              OrderId: {item.orderId}
            </Typography>
            <Typography className={classes.heading}>
              Expected Delivery Date: {item.deliveryDate}
            </Typography>
          </AccordionSummary>
          <SummeryDeatils cart={item.cart} />
        </Accordion>
      ))}
    </div>
  );
}
