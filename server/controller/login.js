const Login = require("../models/register");
const { generateAccessToken } = require("../jwtUtils/jwt");
const login = async (req, res, next) => {
  let user = await Login.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  try {
    if (user) {
      const token = await generateAccessToken(req.body.email);
      const response = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: token,
      };
      res.status(200).json(response);
    } else {
      res.status(401).json("email or password does not match");
    }
  } catch {
    res.status(501).json("something went wrong");
  }
};

module.exports = login;
