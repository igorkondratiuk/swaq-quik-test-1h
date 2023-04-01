const { defineConfig } = require("cypress");
require('dotenv/config')

module.exports = defineConfig({
  e2e: {

    //baseUrl: 'https://www.saucedemo.com',
    baseUrl:process.env.BASE_URL,
    chromeWebSecurity: false,
    video: false,
  },
});
