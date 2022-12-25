const UpdateUserInfo = require("../models/register");

const changePassword = async (req, res, next) => {
  try {
    let user = await UpdateUserInfo.findOne({ email: req.email });
    if (req.body.oldpassword === user.password) {
      const result = await user.updateOne({
        $set: { password: req.body.password },
      });
      res.json(result);
    } else {
      res.status(401).json("check your previous password");
    }
  } catch {
    res.status(500).json("some thing went wrong");
  }
};

const updateUserInfo = async (req, res, next) => {
  try {
    let user = await UpdateUserInfo.findOne({ email: req.email });
    const result = await user.updateOne({ $set: { ...req.body } });
    console.log("userInfo updted");
    const u1 = await UpdateUserInfo.findOne({ email: req.email });
    const response = {
      firstName: u1.firstName,
      lastName: u1.lastName,
      email: u1.email,
    };
    res.json(response);
  } catch {
    res.status(500).json("some thing went wrong");
  }
};

module.exports = { changePassword, updateUserInfo };
