const axios = require('axios');

exports.sendEmail = async (emailData, templateName) => {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.MESSAGE_SERVICE}:${process.env.SERVICE_PRIMARY_KEY}`,
    },
  };

  const payload = {
    messageProfileName: process.env.MESSAGE_PROFILE_NAME,
    cultureCode: process.env.CULTURE_CODE,
    messageTemplateName: templateName,
    emailAddressesTo: emailData.toEmails,
    messageSubstitutions: JSON.stringify({data: emailData.data}),
  };

  try {
    const MESSAGE_SERVICE_ENDPOINT = process.env.MESSAGE_SERVICE_ENDPOINT;
    await axios.post(`${MESSAGE_SERVICE_ENDPOINT}/api/messaging/sendEmail`, payload, config);
    console.log('Email sent successfully');
  } catch (err) {
    console.log(`Error => ${JSON.stringify(err)}`);
    return Promise.reject(err);
  }
};
