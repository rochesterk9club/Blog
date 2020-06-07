// src/config/AdalConfig.js
export default {
    clientId: '12ef22f1-cb85-4cc7-879e-20dfd44f9128',
    endpoints: {
      api: "12ef22f1-cb85-4cc7-879e-20dfd44f9128" // Necessary for CORS requests, for more info see https://github.com/AzureAD/azure-activedirectory-library-for-js/wiki/CORS-usage
    },
    // 'tenant' is the Azure AD instance.
    tenant: '4931b1b2-5ea3-45b2-87f4-498e58403c79',
    // 'cacheLocation' is set to 'sessionStorage' by default (see https://github.com/AzureAD/azure-activedirectory-library-for-js/wiki/Config-authentication-context#configurable-options.
    // We change it to'localStorage' because 'sessionStorage' does not work when our app is served on 'localhost' in development.
    cacheLocation: 'sessionStorage'
  }