const sgEmail = require("@sendgrid/mail");
require("dotenv").config();
const { SENGRID_API_KEY } = process.env;

sgEmail.setApiKey(SENGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "prohorenko89@gmail.com" };
  await sgEmail.send(email);
  return true;
};
module.exports = sendEmail;
