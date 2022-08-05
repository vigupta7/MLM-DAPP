var abi;
var MyContract;
var myContractInstance;

function startDApp()
{
	/*
	var e = document.createElement("script");
	e.src = 'https://storage.googleapis.com/dappsdk/dapp-sdk.bundle.js';
	e.type="text/javascript";
	document.getElementsByTagName("head")[0].appendChild(e);
	*/

	var contractAddr = "0x0ce8bd86c5b7154a1c1aa184eada10b95c255bf4";
	document.getElementById('contractAdd').innerHTML = ""+contractAddr;
	console.log("dapp startup for contract address: "+ contractAddr);
	abi =[ { "inputs": [ { "internalType": "string", "name": "cName", "type": "string" }, { "internalType": "string", "name": "cSymbol", "type": "string" }, { "internalType": "uint256", "name": "expireSeconds", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "TokenOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "approveBurn", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "burn", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokenValue", "type": "uint256" } ], "name": "Burn", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "burnFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "checkHardCap", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "ethValue", "type": "uint256" } ], "name": "Claim", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "CommunityTransfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "mintForCommunity", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "refAddress", "type": "address" } ], "name": "purchase", "outputs": [], "stateMutability": "payable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "ethValue", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokenValue", "type": "uint256" } ], "name": "Purchase", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "TokenOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "burnApproval", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }, { "inputs": [ { "internalType": "address", "name": "TokenOwner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "TokenOwner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "burnAllowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "burnBalanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenVal", "type": "uint256" } ], "name": "calculateEthValue", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "devSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "devSupplyCap", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "distSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "ethVal", "type": "uint256" } ], "name": "estimateTokenCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "hardCapAchieved", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "hardCapValidTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "name": "levelComm", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "name": "levelVolume", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "mfIndex", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "name": "mulfact", "outputs": [ { "internalType": "uint16", "name": "mulFactor", "type": "uint16" }, { "internalType": "uint256", "name": "saleVolume", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalBurnValue", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalDevSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalUsers", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "users", "outputs": [ { "internalType": "uint8", "name": "level", "type": "uint8" }, { "internalType": "address", "name": "parent", "type": "address" }, { "internalType": "uint32", "name": "directCount", "type": "uint32" }, { "internalType": "uint32", "name": "indirectCount", "type": "uint32" }, { "internalType": "uint256", "name": "claimed", "type": "uint256" }, { "internalType": "uint256", "name": "directVolume", "type": "uint256" }, { "internalType": "uint256", "name": "indirectVolume", "type": "uint256" }, { "internalType": "uint256", "name": "ethBalance", "type": "uint256" }, { "internalType": "uint256", "name": "ethInvest", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ];
	MyContract = web3.eth.contract(abi);
	myContractInstance = MyContract.at(contractAddr); //'0x2299cde5b84d7cad6d02ebddf518976b1da77914'
	//myContractInstance = new web3.eth.Contract(abi, contractAddr); // for web3 1.0

}

function getUserTokenBalance(accountAddr){
	var tokenBal;
	myContractInstance.balanceOf(accountAddr, function(err,res){
		if(err){
			console.log("token balance error " +err);
		} else {
			console.log("token balance success " + res);
			tokenBal=web3.fromWei(res.toNumber(), 'ether')
		}
	});
	return tokenBal;
}

function getUserEthBalance(accountAddr) {
	var ethBal;
	web3.eth.getBalance(accountAddr, function(err, resp){
		ethBal=web3.fromWei(resp.toNumber(), 'ether')
	});
	return ethBal;
}

function gettotalSupply(){
	myContractInstance.totalSupply(function(err,res){
		if(err){
			console.log(err);
			document.getElementById('totalNewTokenSupply').innerHTML = ""+err;
		} else {
			console.log(res);
			var totSupply=web3.fromWei(res.toNumber(), 'ether');
			document.getElementById('totalNewTokenSupply').innerHTML = ""+totSupply;
		}
	});
}


function getOneNewTokenValue(totalSupply){
	var currMF;
	var ethVal;

	if (totalSupply < 500000) currMF=500;
	else if (totalSupply < 2500000) currMF=300;
	else if (totalSupply < 5000000) currMF=250;
	else if (totalSupply < 10000000) currMF=200;
	else if (totalSupply < 20000000) currMF=175;
	else if (totalSupply < 30000000) currMF=150;
	else if (totalSupply < 40000000) currMF=125;
	else if (totalSupply < 50000000) currMF=100;
	else currMF=50;

	ethVal = (1/currMF).toFixed(4);	
	return ethVal;
}

function getAccountInfo(accountAddr){
	var data;
	var ethBal;
	var tokenBal;
	var refCommPer;

	console.log("accountAddr = " + accountAddr);
	document.getElementById('myAddress').innerHTML = ""+accountAddr;
	document.getElementById('ethInfoAdd').value = ""+accountAddr;
	
	/* for web3-1.0 or dapp-sdk
	myContractInstance.methods.totalSupply().call().then(function(res){
		console.log("total supply success " +res);
	}).catch(function(err) {
		console.log("total supply fail " +err);
	});
	*/
	myContractInstance.balanceOf(accountAddr, function(err,res){
		if(err){
			console.log("token balance error " +err);
		} else {
			console.log("token balance success " + res);
			tokenBal=web3.fromWei(res.toNumber(), 'ether')

			web3.eth.getBalance(accountAddr, function(err, resp){
				if(err){
					console.log("eth balance error " +err);
				} else {
					ethBal=web3.fromWei(resp.toNumber(), 'ether')
					console.log("eth balance success " +ethBal);

					myContractInstance.users(accountAddr,function(err,res){
						if(err) {
							data = err;
							console.log("users info err" + err);
						} else {
							res = res + '';
							var userArr = res.split(',');
							console.log(userArr);

							myContractInstance.levelComm(userArr[0],function(err,res){
								if(err){
									console.log("level comm error " + err);
								} else {
									console.log("level comm success " + res);
									refCommPer=res.toNumber();
									data = {
										address: accountAddr,
										ethBal: ethBal,
										tokenBal: tokenBal,
										level: userArr[0],
										parent: userArr[1],
										directCount: userArr[2],
										indirectCount: userArr[3],
										claimed: web3.fromWei(userArr[4], 'ether'),
										directVolume:  web3.fromWei(userArr[5], 'ether') ,
										indirectVolume:  web3.fromWei(userArr[6], 'ether') ,
										ethEarned: web3.fromWei(userArr[7], 'ether'),
										ethInvest: web3.fromWei(userArr[8], 'ether')
									};
									//Set Values
									
									document.getElementById('parentAddress').innerHTML = ""+data.parent;
									document.getElementById('myEthBal').innerHTML = ""+data.ethBal;
									document.getElementById('myNewTokenBal').innerHTML = ""+data.tokenBal;
									document.getElementById('myRefPercentage').innerHTML = ""+refCommPer;
									document.getElementById('mydirectRefCount').innerHTML = ""+data.directCount;
									document.getElementById('myIndirectRefCount').innerHTML = ""+data.indirectCount;
									document.getElementById('myRefClaims').innerHTML = ""+data.claimed;
									document.getElementById('myRefUnclaimed').innerHTML = ""+eval(eval(data.ethEarned) - eval(data.claimed));
									document.getElementById('myDirectSales').innerHTML = ""+data.directVolume;
									document.getElementById('myIndirectSales').innerHTML = ""+data.indirectVolume;
									document.getElementById('myTotalSales').innerHTML = ""+ eval(eval(data.directVolume) + eval(data.indirectVolume));		
								}
							});
						}
					});	
				}
			});
		}
	});
}

function purchase(){ 
	var referralAdd = document.getElementById('referralAdd').value;
	var amount = document.getElementById('ethAmount').value;
	console.log(" eth amount = " + web3.toWei(amount, "ether"));
	console.log(" referralAdd = " + referralAdd);
	//web3.toWei(amount, "ether")
	myContractInstance.purchase(referralAdd, {from: web3.eth.accounts[0], gas: 800000, gasPrice: web3.toWei(90, 'gwei'), value: web3.toWei(amount, "ether")}, 
		function(err, res)
		{
			if(err){
				console.log(err);
				document.getElementById('purchase').innerHTML = ""+err;
			} else {
				console.log(res);
				document.getElementById('purchase').innerHTML = "<a href='https://ropsten.etherscan.io/tx/"+res+"'>"+res + "</a>";
			}
		});

		var event = myContractInstance.Transfer({},function(error, result) {
			if (!error) {
				var msg = result.args.from +" sent  " + result.args.value + " coins to " + result.args.to;
				document.getElementById('purchase').innerHTML += "<br>"+msg;
				console.log(msg);
			}	
			else {
				console.error(error);
			} 
		});
}

function claim(){
	var receiverAdd = web3.eth.accounts[0];
	var amountToSend = document.getElementById('ethClaimAmount').value;
	
	console.log("amount to send = " + web3.toWei(amountToSend, "ether"));
	console.log("receiverAdd = " + receiverAdd);

	myContractInstance.withdraw(web3.toWei(amountToSend, "ether"),{from: receiverAdd, gas: 500000,gasPrice: web3.toWei(90, 'gwei')}, 
	function(err,res){
		if(err){
			console.log(err);
			document.getElementById('claim').innerHTML = ""+err;
		} else {
			console.log(res);
			document.getElementById('claim').innerHTML = "<a href='https://ropsten.etherscan.io/tx/"+res+"'>"+res + "</a>";
		}
	});

	var event = myContractInstance.Claim({},function(error, result) {
		if (!error) {
			var msg = result.args.from +" Claimed  " + result.args.ethValue ;
			document.getElementById('claim').innerHTML += "<br>"+msg;
			console.log(msg);
		}	
		else {
			console.error(error);
		} 
	});
}