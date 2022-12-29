const {
  Contact,
} = require("/Projects/nodejs-homework-rest-api/models/contact");
const { HttpError } = require("/Projects/nodejs-homework-rest-api/helpers");

const getByIdContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};
module.exports = getByIdContact;
