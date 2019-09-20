var request = require("request");

function config(options) {
	this.apiKey = options.apiKey;
	this.secret = options.secret;
	this.user_name = options.walletName;
	this.password = options.password;
	this.base_url = 'https://api.terragreen.io/api/';
	this.access_token ="";

	
}
config.prototype = {
	_CreateWallet: function (callback) {
		var _this = this;
		var data_array = {};
		data_array["ApiKey"] = _this.apiKey;
		data_array["SecretKey"] = _this.secret;
		data_array["email"] = null;
		data_array["WalletName"] = _this.user_name;
		data_array["WalletPassword"] = _this.password;

		request({
			headers: {
				'content-type': 'application/json'
			},
			uri: _this.base_url + 'Wallet/Create',
			body: JSON.stringify(data_array),
			method: 'POST'
		}, function (err, res, body) {
			callback(JSON.parse(body));
		});
	},
	_GetInitialize: function (callback) {
		var _this = this;
		var data_array = {};
		data_array["ApiKey"] = _this.apiKey;
		data_array["SecretKey"] = _this.secret;
		data_array["WalletName"] = _this.user_name;
		data_array["WalletPassword"] = _this.password;
		request({
			headers: {
				'content-type': 'application/json'
			},
			uri: _this.base_url + 'Wallet/Initialize',
			body: JSON.stringify(data_array),
			method: 'POST'
		}, function (err, res, body) {
			callback(JSON.parse(body));
			this.access_token=JSON.parse(body).access_token;
		});
	},
	_GetBalance: function (callback) {
		 var _this = this;
			request({
				headers: {
					'Authorization': 'bearer ' + _this.access_token,
					'content-type': 'application/json'
				},
				uri: _this.base_url + 'Wallet/Balance',
				method: 'GET'
			}, function (err, res, body) {
				callback(JSON.parse(body));
			});

	},
	_GetBlockDetails: function (block_id, callback) {
		var _this = this;
			request({
				headers: {
					'Authorization': 'bearer ' + _this.access_token,
					'content-type': 'application/json'
				},
				uri: _this.base_url + 'Block/GetBlockDetails',
				body: JSON.stringify(data_array),
				method: 'POST'
			}, function (err, res, body) {
				callback(JSON.parse(body));
			});
	},
	_GetBlocks: function (start_index, end_index, callback) {
		var _this = this;
				var objectValue = JSON.parse(JSON.stringify(JSON.parse(body)));
			var data_array = {};
			data_array["StartIndex"] = start_index;
			data_array["EndIndex"] = end_index;

			request({
				headers: {
					'Authorization': 'bearer ' + _this.access_token,
					'content-type': 'application/json'
				},
				uri: _this.base_url + 'Block/GetBlocks',
				body: JSON.stringify(data_array),
				method: 'POST'
			}, function (err, res, body) {
				callback(JSON.parse(body));
			});
	},
	_GetLatestBlock: function (callback) {
		var _this = this;
			request({
				headers: {
					'Authorization': 'bearer ' + _this.access_token,
					'content-type': 'application/json'
				},
				uri: _this.base_url + 'Block/GetLatestBlocks',
				method: 'GET'
			}, function (err, res, body) {
				console.log(data_array);
				callback(JSON.parse(body));
			});

	},
	_GetNewAddress: function (callback) {
		var _this = this;
			var objectValue = JSON.parse(JSON.stringify(JSON.parse(body)));
			request({
				headers: {
					'Authorization': 'bearer ' + _this.access_token,
					'content-type': 'application/json'
				},
				uri: _this.base_url + 'Transaction/GetNewAddress',
				method: 'GET'
			}, function (err, res, body) {
				callback(JSON.parse(body));
			});
	},
	_GetTransactionList: function (callback) {
		var _this = this;
				var objectValue = JSON.parse(JSON.stringify(JSON.parse(body)));
			request({
				headers: {
					'Authorization': 'bearer ' + _this.access_token,
					'content-type': 'application/json'
				},
				uri: _this.base_url + 'Transaction/GetTransactionList',
				method: 'GET'
			}, function (err, res, body) {
				callback(JSON.parse(body));
			});
	},
	_SendBalance: function (send_address, amount, callback) {
		var _this = this;
			var data_array = {};
			data_array["SendAddress"] = send_address;
			data_array["Amount"] = amount;

			request({
				headers: {
					'Authorization': 'bearer ' + _this.access_token,
					'content-type': 'application/json'
				},
				uri: _this.base_url + 'Transaction/Send',
				body: JSON.stringify(data_array),
				method: 'POST'
			}, function (err, res, body) {
				callback(JSON.parse(body));
			});
	},
	_VerifyPaymentStatus: function (receive_address, callback) {
		var _this = this;
			request({
				headers: {
					'Authorization': 'bearer ' + _this.access_token,
					'content-type': 'application/json'
				},
				uri: _this.base_url + 'Transaction/VerifyPaymentStatus?=',
				method: 'POST'
			}, function (err, res, body) {
				callback(JSON.parse(body));
			});
	},
	_CurrentRate: function (callback) {
		var _this = this;
		request({
			headers: {
				'content-type': 'application/json'
			},
			uri: _this.base_url + 'Rate/GetRate',
			method: 'GET'
		}, function (err, res, body) {
			callback(JSON.parse(body));
		});
	},
	_AllRate: function (callback) {
		var _this = this;
		request({
			headers: {
				'content-type': 'application/json'
			},
			uri: _this.base_url + 'Rate/GetAllRates',
			method: 'GET'
		}, function (err, res, body) {
			callback(JSON.parse(body));
		});
	},

	_AddressBalance: function (walletaddress, callback) {
		var _this = this;
		var data_array = {

			"WalletAddress": walletaddress
		};
		request({
			headers: {
				'content-type': 'application/json',
				'Authorization': 'bearer ' + _this.access_token,

			},
			uri: _this.base_url + 'Wallet/AddressBalance',
			body: JSON.stringify(data_array),
			method: 'POST'
		}, function (err, res, body) {

			callback(JSON.parse(body));

		});
	},

	_GetTransactionListByAddress: function (walletaddress,startingIndex,endingIndex,callback) {
		var _this = this;
		var data_array = {
			"WalletAddress": walletaddress,
			"PageIndex": isNaN(startingIndex) ? 1 : startingIndex,
			"Pagesize": isNaN(endingIndex) ? 10 : endingIndex,
		};
		request({
			headers: {
				'content-type': 'application/json',
				'Authorization': 'bearer ' + _this.access_token,

			},
			uri: _this.base_url + 'Wallet/AddressBalance',
			body: JSON.stringify(data_array),
			method: 'POST'
		}, function (err, res, body) {

			callback(JSON.parse(body));

		});
	},

	_GetBlockNumber: function (callback) {
		var _this = this;
			var data_array = {};
			data_array["StartIndex"] = 1;
			data_array["EndIndex"] = 1;

			request({
				headers: {
					'Authorization': 'bearer ' + _this.access_token,
					'content-type': 'application/json'
				},
				uri: _this.base_url + 'Block/GetBlocks',
				body: JSON.stringify(data_array),
				method: 'POST'
			}, function (err, res, body) {
				callback(JSON.parse(body));
			});
	},

}

module.exports = config;
