const {
  Contact,
} = require("/Projects/nodejs-homework-rest-api/models/contact");
const { HttpError } = require("/Projects/nodejs-homework-rest-api/helpers");

const updateFavoriteContact = async (req, res) => {
  const { id } = req.params;

  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};
module.exports = updateFavoriteContact;
