const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  cart: {
    type: Array,
  },
  orders: {
    type: Array,
  },
  address: {
    type: Array,
  },
  cardDeatils: {
    type: Array,
  },
  paymentDetails: {
    type: Array,
  },
});

const CartList = mongoose.model("userCartList", userSchema);

module.exports = CartList;
