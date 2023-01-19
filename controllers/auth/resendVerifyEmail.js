const HttpError = require("../../helpers/HttpError");
const { User } = require("../../models/user");
const { sendEmail } = require("../../helpers");
const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw res.json({
      status: 400,
      message: "Missing required field email",
    });
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404);
  }
  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }
  const verifyEmail = {
    to: email,
    subject: "Verify your email",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationCode}">Click to verify email<a>`,
  };
  await sendEmail(verifyEmail);

  res.json({
    message: "Verify email resend",
  });
};
module.exports = resendVerifyEmail;
