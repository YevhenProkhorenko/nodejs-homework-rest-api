const express = require("express");
const router = express.Router();

const { cntrlWrapper } = require("../../helpers");
const { validateBody, authenticate, upload } = require("../../middlewares");
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
router.get("/verify/:verificationCode", cntrlWrapper(cntrl.verifyUser));
router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  cntrlWrapper(cntrl.resendVerifyEmail)
);
router.post("/logout", authenticate, cntrlWrapper(cntrl.logoutUser));
router.patch("/users", authenticate, cntrlWrapper(cntrl.subscriptionUpdate));
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  cntrlWrapper(cntrl.updateAvatar)
);

module.exports = router;
// npm run start:dev
