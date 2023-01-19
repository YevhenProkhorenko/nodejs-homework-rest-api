const signup = require("./signup");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logoutUser = require("./logoutUser");
const subscriptionUpdate = require("./subscriptionUpdate");
const updateAvatar = require("./updateAvatar");
const verifyUser = require("./verifyUser");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  signup,
  login,
  getCurrent,
  logoutUser,
  subscriptionUpdate,
  updateAvatar,
  verifyUser,
  resendVerifyEmail,
};
