const config = require(__dirname + '/../config.js');

const app_config = new config({
  apiKey: process.env.COIN_API_KEY,
  secret: process.env.COIN_SECRET_KEY,
  walletName: '<wallet_name>',
  password: '<password>'
});

var walletaddress = '<walle_address>';
var startingIndex = '<starting_Index>';
var endingIndex = '<ending_Index>'
app_config._GetTransactionListByAddress(walletaddress,startingIndex,endingIndex,function(results){
	console.log(results);
});

