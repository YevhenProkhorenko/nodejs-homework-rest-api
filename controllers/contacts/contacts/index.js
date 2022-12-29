const getAllContacts = require("./getAllContacts");
const getByIdContact = require("./getByIdContact");
const addContact = require("./addContact");
const updateContact = require("./updateContact");
const removeContact = require("./removeContact");
const updateFavoriteContact = require("./updateFavoriteContact");

module.exports = {
  addContact,
  getAllContacts,
  getByIdContact,
  updateContact,
  removeContact,
  updateFavoriteContact,
};
