const config = require(__dirname + '/../config.js');

const app_config = new config({
  apiKey: process.env.COIN_API_KEY,
  secret: process.env.COIN_SECRET_KEY,
  walletName: '<wallet_name>',
  password: '<password>'
});
var start_index = 1;
var end_index = 5;
app_config._GetBlocks(start_index,end_index,function(results){
	console.log(results);
});

