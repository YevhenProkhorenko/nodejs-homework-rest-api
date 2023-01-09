const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");
const { SECRET_KEY } = process.env;

const subscriptionUpdate = async (req, res) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError(401));
  }
  const { id } = jwt.verify(token, SECRET_KEY);
  const result = await User.findByIdAndUpdate(id, req.body, { new: true });

  if (!result.subscription) {
    console.log("Ошибка");
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
    return;
  }
  res.json(result);
};
module.exports = subscriptionUpdate;
