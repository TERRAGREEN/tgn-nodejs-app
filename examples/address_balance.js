const config = require(__dirname + '/../config.js');

const app_config = new config({
  apiKey: process.env.COIN_API_KEY,
  secret: process.env.COIN_SECRET_KEY,
  walletName: '<wallet_name>',
  password: '<password>'
});
var walletaddress = '<walletaddress>';

app_config._AddressBalance(walletaddress,function(results){
	console.log(results);
});

