const { sendEmail } = require('../utils/mailer');

exports.inviteClient = async (payload) => {
  await sendEmail(payload, process.env.INVITE_CLIENT_MESSAGE_TEMPLATE_NAME);
};

exports.sendCredential = async (payload) => {
  await sendEmail(payload, process.env.SEND_CREDENTIAL_MESSAGE_TEMPLATE_NAME);
};
