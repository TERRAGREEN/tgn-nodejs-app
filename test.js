const tgn = require('tgn-node-app');
 
const app_tgn = new tgn({
  apiKey: process.env.COIN_API_KEY,
  secret: process.env.COIN_SECRET_KEY,
  walletName: 'testsneha35',
  password: 'Sneha@123'
});
app_tgn._AllRate(function(results){
    console.log(results);
});