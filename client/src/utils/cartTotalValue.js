export const cartTotal = (cart) => {
  const totalAmount = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.productDetails.price,
    0
  );
  return totalAmount;
};
