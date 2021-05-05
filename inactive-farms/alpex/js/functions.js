const mainABI = [{"inputs":[{"internalType":"contract DefyCoin","name":"_defy","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"address","name":"_wfarm","type":"address"},{"internalType":"contract DefyMaster","name":"_defymaster","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Sendfarm","type":"event"},{"inputs":[],"name":"defy","outputs":[{"internalType":"contract DefyCoin","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defymaster","outputs":[{"internalType":"contract DefyMaster","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sendfarm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wfarm","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
const poolABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]

const bnbPrecision = 1e18

var mainContract = undefined
var contractAddress = "0x39Daa54d488F2B382FAE1ab748605670d887a00F"

var pools = []
pools.push( { name: 'defyBNB', addr: "0xf4eb56A0abaeA2354542B17ECc9816E3117d69B4", contract: '', pid: 0, userBal: 0, userDep: 0 } )
pools.push( { name: 'defyBUSD', addr: "0x39B6007c947973a2feb5290fe5e24a81770ec3aE", contract: '', pid: 1, userBal: 0, userDep: 0 } )

				

const user = {
    address: undefined,
	bnb: undefined,
	depositAmount: undefined
}

$(document).ready(function() {
	beginLogins()
})

let attempts = 0
async function beginLogins(){
	window.ethereum.enable()
	await userLoginAttempt()
	setTimeout(() => {
		if(user.address == undefined && attempts < 3){
			setTimeout(() => {
				if(user.address == undefined && attempts < 3){
					attempts++
					beginLogins()
				}
			}, 300)
		}
	}, 300)
}

async function userLoginAttempt(){
	await window.addEventListener('load', function () {
		// Load WEB3
		if (typeof web3 !== 'undefined') {
			web3 = new Web3(web3.currentProvider);
			console.log("conn")
			// Or connect to a node
		} else {
			web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8080"));
		}

		window.ethereum.enable()
		window.eth_requestAccounts

		const loginPromise = new Promise((resolve, reject) => {
			if (window.web3) {
				resolve(true)
			} else {
				window.addEventListener('load', () => {
					let tbAcc = setInterval(() => {
						if (window.ethereum) resolve(true)
						clearInterval(tbAcc)
					}, 200)

					setTimeout(() => {
						clearInterval(tbAcc)
					}, 10000)
				})
			}
		})
		.then(() => {
			console.log("web3 logged in")
			return true
		})
		.catch((err) => {
			console.error('Error while detecting web3', err)
			return false
		})

		loginPromise.then((result) => {
			return new Promise(async (resolve, reject) => {

				await web3.eth.getAccounts().then(function (result) {
					user.address = result[0]
					$('.user-address')[0].innerHTML = "Connected: " +user.address

					console.log("User " + user.address + " connected.")
					getUserBalance()
					initContract(window.web3.eth)

					setInterval(async () => {
						web3.eth.getAccounts().then(function (result) {
							if (window.web3 && user.address !== result[0]) location.reload()
						})
					}, 700)
				})	
			})
		})
	})
}

async function initContract(BinanceChain){
	try{
		for(let i = 0; i < pools.length; i++)
			await (pools[i].contract = new BinanceChain.Contract(poolABI, pools[i].addr))
		
		await (mainContract = new BinanceChain.Contract(mainABI, contractAddress))
		if(mainContract != undefined){
			console.log("BNES "+contractAddress+" loaded!")
			contractLoaded()
		}else{
				console.error(error)
				setTimeout(() => {
					initContract(BinanceChain)
				}, 250)
		}
	}catch(e){
		console.log(e)
		setTimeout(() => {
			initContract(BinanceChain)
		}, 250)
	}
}

async function contractLoaded() {
	getUserBalance()
	for(let i = 0; i < pools.length; i++){
		pendingDefy(i)
		poolBalance(i)
		userInfo(i)
	}

    setInterval(() => {
        contractLoaded()
    }, 1000 * 20)

}

// get balance of user and set it on the header
async function getUserBalance() {
	if(user.address != undefined){
		user.bnb = (await web3.eth.getBalance(user.address) / bnbPrecision).toFixed(6)
		$('.user-balance')[0].innerHTML = "Your BNB: " +user.bnb
	}else
		setTimeout(() => {
			getUserBalance()
		}, 2000)
}
function toHexString(number){
	return '0x'+number.toString(16)
}
async function deposit(pid){
	let amount = toHexString( $('.deposit-input-'+pid)[0].value * 1e18 )
	await mainContract.methods.deposit(pid, amount).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})
}
async function approve(pid){
	let amount = toHexString($('.deposit-input-'+pid)[0].value * 1e18)
	let contract = pools[pid].contract
	await contract.methods.approve(contractAddress, amount).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})
}
async function harvest(pid){
	await mainContract.methods.sendfarm().send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})
}
async function withdraw(pid){
	let amount = toHexString($('.withdraw-input-'+pid)[0].value * 1e18)
	await mainContract.methods.withdraw(pid, amount).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})
}

async function pendingDefy(pid){
	let pendingDefy = (await mainContract.methods.pendingdefy(pid, user.address).call() / 1e8).toFixed(8)
	$('.pending-defy-'+pid)[0].innerHTML = " " +pendingDefy
}

async function poolBalance(pid){
	let contract = pools[pid].contract
	let lpBalance = await contract.methods.balanceOf(user.address).call()/ 1e18
	let lpb = Math.floor(lpBalance * 1e9) / 1e9
	pools[pid].userBal = lpb 
	$('.user-lp-'+pid)[0].innerHTML = " " +lpb
}
async function maxDeposit(pid){
	$('.deposit-input-'+pid)[0].value = pools[pid].userBal
}
async function maxWithdraw(pid){
	$('.withdraw-input-'+pid)[0].value = pools[pid].userDep
}

async function userInfo(pid){
	let userInfo = await mainContract.methods.wfarm().call()
	let amount = (userInfo)
	pools[pid].userDep = amount
	$('.userInfo-amount-'+pid)[0].innerHTML = " " +amount
}