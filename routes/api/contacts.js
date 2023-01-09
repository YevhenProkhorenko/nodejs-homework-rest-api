const express = require("express");

const router = express.Router();

const cntrl = require("../../controllers/contacts/contacts");
const { cntrlWrapper } = require("../../helpers");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", authenticate, cntrlWrapper(cntrl.getAllContacts));

router.get("/:id", authenticate, isValidId, cntrlWrapper(cntrl.getByIdContact));

router.post(
  "/",
  authenticate,
  validateBody(schemas.postSchema),
  cntrlWrapper(cntrl.addContact)
);

router.delete(
  "/:id",
  authenticate,
  isValidId,
  cntrlWrapper(cntrl.removeContact)
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.putSchema),
  cntrlWrapper(cntrl.updateContact)
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchemas),
  cntrlWrapper(cntrl.updateFavoriteContact)
);

module.exports = router;
//npm run start:dev
