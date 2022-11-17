const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    PORT: Joi.number().default(3000),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  port: envVars.PORT,
  env: envVars.NODE_ENV,
  LICENSE_VC_VERIFICATION_ID: envVars.LICENSE_VC_VERIFICATION_ID,
  DOCUMENT_VC_VERIFICATION_ID: envVars.DOCUMENT_VC_VERIFICATION_ID,
  VAULT_API_KEY: envVars.VAULT_API_KEY,
  DOCUMENT_TEMPLATE_CREDENTIAL_ID: envVars.DOCUMENT_TEMPLATE_CREDENTIAL_ID,
};
