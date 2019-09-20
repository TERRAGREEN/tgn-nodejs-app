const tgn = require('tgn-node-app');

const app_tgn = new tgn({
  apiKey: process.env.COIN_API_KEY,
  secret: process.env.COIN_SECRET_KEY,
  walletName: "<walletName>",
  password: "<password>"
});

app_tgn._GetInitialize(function (results) {
  console.log('_GetInitialize:', results);
  app_tgn.access_token=results.access_token;

});


