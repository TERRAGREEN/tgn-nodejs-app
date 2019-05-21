# tgn-node-app
## General Features

* Implementation of all General, Market Data and Accounting Related Data.
* Simple handling of authentication
* Manage Wallet, Transaction Details, Rates And Block Details.
* Exception Handling.
* API Response in diffrent formats like JSON & XML.
* Unique API Key & Secret Key provided to each user.

## API key
		
To use Terragreen API, user will need to obtain API key and secret key, which are passed to TerraGreen API with every request. API keys can be generated in the TerraGreen BlockChain Portal, under section 'API KEYS'. Direct link to API key creation panel: [Get API Key]


## Steps to obtain API Key and Secret key:


* Create account at BlockChain portal. [Create Account]
* Verify your account.
* SignIn at BlockChain portal. [Sign In]
* Go to Api Key section. [Key Section]
* Create Api Key. [Create API Key]

## Installation
The Node.js library for the Terragreen API.
```sh
npm i tgn-node-app
```
## Initialization
```sh
const tgn = require('tgn-node-app');

const app_tgn = new tgn({
  apiKey: process.env.COIN_API_KEY,
  secret: process.env.COIN_SECRET_KEY,
  walletName: '[wallet_name]',
  password: '[password]'
});
```
# Block
### Get Blocks Details

Get block details.
```sh
var block_id = 1;
app_tgn._GetBlockDetails(block_id,function(results){
	console.log(results);
});
```
### Get Blocks

Get Blocklist.
```sh
var start_index = 1;
var end_index = 5;
app_tgn._GetBlocks(start_index,end_index,function(results){
	console.log(results);
});
```
### Get Latest Block

Gets latest block list.
```sh
app_tgn._GetLatestBlock(function(results){
	console.log(results);
});
```
# Rate
### Get Rate

Get TGCoin's current rates.
```sh
app_tgn._CurrentRate(function(results){
	console.log(results);
});
```
### Get All Rate

Get TGCoin rates.
```sh
app_tgn._AllRate(function(results){
	console.log(results);
});
```
# Transaction
### Get New Address

Get new receive address.
```sh
app_tgn._GetNewAddress(function(results){
	console.log(results);
});
```
### Send Balance

Send amount to other user's wallet.
```sh
var send_address = '[send_address]';
var amount = 10;
app_tgn._SendBalance(send_address,amount,function(results){
	console.log(results);
});
```
### Get Transaction List

Get transaction list of the user.
```sh
app_tgn._GetTransactionList(function(results){
	console.log(results);
});
```
### Verify Payment

Verify transaction's payment status.
```sh
var receive_address = '[receive_address]';
app_tgn._VerifyPaymentStatus(receive_address,function(results){
	console.log(results);
});
```
# Wallet
### Create Wallet

Create Wallet Account.
```sh
app_tgn._CreateWallet(function(results){
	console.log(results);
});
```
### Get Initialize

Get access-token to access all authorized apis.
```sh
app_tgn._GetInitialize(function(results){
	console.log(results);
});
```
### Get Balance

Get Wallet Balance.
```sh
app_tgn._GetBalance(function(results){
	console.log(results);
});
```

[Get API Key]: <http://blockchain.terragreen.io/Api/ApiCreate>
[Create API Key]: <http://blockchain.terragreen.io/Api/ApiCreate>
[Create Account]: <http://blockchain.terragreen.io/Account/Register>
[Sign In]: <http://blockchain.terragreen.io/Account/Login>
[Key Section]: <http://blockchain.terragreen.io/Docs/Index>

