const express = require("express");
const router = express.Router();

const { cntrlWrapper } = require("../../helpers");
const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");

const cntrl = require("../../controllers/auth");

router.post(
  "/signup",
  validateBody(schemas.registerSchema),
  cntrlWrapper(cntrl.signup)
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  cntrlWrapper(cntrl.login)
);
router.get("/current", authenticate, cntrlWrapper(cntrl.getCurrent));
router.post("/logout", authenticate, cntrlWrapper(cntrl.logoutUser));
router.patch("/users", authenticate, cntrlWrapper(cntrl.subscriptionUpdate));

module.exports = router;
// npm run start:dev
