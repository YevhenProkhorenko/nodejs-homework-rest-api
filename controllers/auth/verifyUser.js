const { User } = require("../../models/user");
const HttpError = require("../../helpers/HttpError");

const verifyUser = async (req, res) => {
  const { verificationCode } = req.params;

  const user = await User.findOne({ verificationCode });
  if (!user) {
    throw HttpError(404, "User not found");
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationCode: "",
  });
  res.json({
    message: "Verification successful",
  });
};
module.exports = verifyUser;
