const bcrypt = require("bcrypt");
const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");
const gravatar = require("gravatar");

const signup = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarUrl = gravatar.url(email);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarUrl,
  });
  res.status(201).json({
    email: newUser.email,
    subscription: "starter",
  });
};
module.exports = signup;
// npm run start:dev
