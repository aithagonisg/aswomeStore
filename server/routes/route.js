const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../jwtUtils/jwt");
const products = require("../controller/products");
const register = require("../controller/registration");
const login = require("../controller/login");
const multer = require("multer");

const {
  addToCart,
  removeItemFromCart,
  getCartAndOrdersList,
  addAddress,
  addCardDetails,
  placeOrder,
} = require("../controller/addToCart");

const {
  changePassword,
  updateUserInfo,
} = require("../controller/updateUserInfo");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/images`);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
var upload = multer({ storage: storage });

router.get("/products", products);

router.post("/register", register);

router.post("/login", login);

router.post("/addtocart", authenticateToken, addToCart);

router.post("/removefromcart", authenticateToken, removeItemFromCart);

router.post("/addaddress", authenticateToken, addAddress);

router.post("/addcarddetails", authenticateToken, addCardDetails);

router.post("/placeOrder", authenticateToken, placeOrder);

router.post("/changepassword", authenticateToken, changePassword);

router.post("/updateuserinfo", authenticateToken, updateUserInfo);

router.post("/getCartAndOrderList", authenticateToken, getCartAndOrdersList);

router.post(
  "/upload/profile",
  upload.single("profileImg"),
  (req, res, next) => {
    const file = req.file;
    if (!file) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }
    res.send(file);
  }
);

router.get("/images/:fileName", (req, res) => {
  try {
    const fileName = req?.params?.fileName?.split(":")[1];
    res.sendFile(`${__dirname}/images/${fileName}`);
  } catch {
    res.send("something went wrong");
  }
});

module.exports = router;
