const CartList = require("../models/cartList");
const uuid = require("uuid");

const addToCart = async (req, res, next) => {
  let user = await CartList.findOne({ email: req.email });
  const result = await user.updateOne({ $push: { cart: req.body } });
  res.json(result);
};

const removeItemFromCart = async (req, res, next) => {
  let user = await CartList.findOne({ email: req.email });
  const result = await user.updateOne({ $pull: { cart: req.body } });
  res.json(result);
};
const addAddress = async (req, res) => {
  let user = await CartList.findOne({ email: req.email });
  const addList = user.address;
  const index = addList.findIndex(
    (item) => item.isPermanentAddress == req.body.isPermanentAddress
  );

  let result;
  if (index != -1) {
    addList[index] = req.body;
    result = await user.updateOne({
      $set: { address: addList },
    });
  } else {
    result = await user.updateOne({
      $push: { address: req.body },
    });
  }
  res.json(result);
};
const addCardDetails = async (req, res) => {
  let user = await CartList.findOne({ email: req.email });
  const result = await user.updateOne({ $set: { cardDeatils: req.body } });
  res.json(result);
};

const placeOrder = async (req, res) => {
  const orderId = uuid.v1();
  var future = new Date();
  future.setDate(future.getDate() + 3);
  const body = {
    orderId: orderId,
    deliveryDate: future,
    ...req.body,
  };
  let user = await CartList.findOne({ email: req.email });
  const result = await user.updateOne({
    $push: { orders: body },
    $set: { cart: [] },
  });
  res.json({ orderId: orderId, deliveryDate: future });
};

const getCartAndOrdersList = async (req, res, next) => {
  let user = await CartList.findOne({ email: req.email });
  res.json({ cart: user });
};
module.exports = {
  addToCart,
  removeItemFromCart,
  getCartAndOrdersList,
  addAddress,
  addCardDetails,
  placeOrder,
};
