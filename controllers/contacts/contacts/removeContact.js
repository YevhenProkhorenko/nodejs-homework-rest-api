const {
  Contact,
} = require("/Projects/nodejs-homework-rest-api/models/contact");
const { HttpError } = require("/Projects/nodejs-homework-rest-api/helpers");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Delete Success" });
};
module.exports = removeContact;
