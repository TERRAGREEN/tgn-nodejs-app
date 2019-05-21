const config = require(__dirname + '/../config.js');

const app_config = new config({
  apiKey: process.env.COIN_API_KEY,
  secret: process.env.COIN_SECRET_KEY,
  walletName: '<wallet_name>',
  password: '<password>'
});
var send_address = '<send_address>';
var amount = 10;
app_config._SendBalance(send_address,amount,function(results){
	console.log(results);
});

