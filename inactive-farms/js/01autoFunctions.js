
let rewardPerYear;	

$(document).ready(function() {
	autoContract()
})

async function autoContract() {
	try{
		const HttpProvider = Web3.providers.HttpProvider;
		const fullNode = new HttpProvider(network);
		const solidityNode = new HttpProvider(network);
		const eventServer = new HttpProvider(network);
		
		let web3 = new Web3(fullNode, solidityNode, eventServer)
			
		for(let i = 0; i < pools.length; i++){
			await (pools[i].contract = new web3.eth.Contract(pools[i].ABI, pools[i].addr))
			await (pools[i].swapContract = new web3.eth.Contract(pools[i].swapABI, pools[i].swapAddr))
		}
			
		await (farmAuto = new web3.eth.Contract(farmABI, farmAddress))
		await (defyAuto = new web3.eth.Contract(defyABI, defy))
		await (wbnbAuto = new web3.eth.Contract(wbnbABI, wbnb))
		await (busdAuto = new web3.eth.Contract(wbnbABI, busd))
		await (tndrAuto = new web3.eth.Contract(tndrABI, tndr))
		
		await (defyBnbAuto = new web3.eth.Contract(defyBusdABI, defyBnbAddress))
		await (defyBusdAuto = new web3.eth.Contract(defyBusdABI, defyBusdAddress))
		await (tndrBusdAuto = new web3.eth.Contract(defyBusdABI, tndrBusdAddress))
		await (priceFeed = new web3.eth.Contract(priceFeedABI, priceFeedAddress))
		
		await (defyBnbApeAuto = new web3.eth.Contract(apePoolABI, defyBnbApeAddress))
		await (defyBusdApeAuto = new web3.eth.Contract(apePoolABI, defyBusdApeAddress))
		
		await (pancakeContract = new web3.eth.Contract(pancakeABI, pancakeAddress))
		await (apeContract = new web3.eth.Contract(apeABI, apeAddress))
		await getPancakePrices()
		await getApePrices()
		
		for(let i = 0; i < pools.length; i++){
			await autoBalances(i)
			getLiqTotals(i)
		}
		
		getSupply()
		setInterval(() => {
			refreshStats()
		}, 1000 * 10)
		
	}catch(e){
		console.log(e)
		setTimeout(() => {
			autoContract()
		}, 750)
	}
}
function refreshStats(){
	getSupply()
	getPancakePrices()
	for(i = 0; i < pools.length; i++){
		autoBalances(i)
		getLiqTotals(i)
	}
}	

async function getSupply(){
	let totalSupply = await defyAuto.methods.totalSupply().call() / 1e8
	$('.total-supply')[0].innerHTML = '' +totalSupply.toFixed()
		
	let totalBurn = await defyAuto.methods.totalBurn().call() / 1e8
	$('.total-burned')[0].innerHTML = '' +totalBurn.toFixed()
}

let currentBnbToDefy
let currentDefyToBnb

let currentBusdToDefy = 0
//let currentDefyToBusd

let currentBnbPriceToUsd

let walletInt
async function getPancakePrices(){
	let resDefyBnb = await defyBnbAuto.methods.getReserves().call()	
	let resDefyBusd = await defyBusdAuto.methods.getReserves().call()
	let roundData = await priceFeed.methods.latestRoundData().call()
	currentBnbPriceToUsd = roundData.answer / 1e8
	
	currentBnbToDefy = await pancakeContract.methods.quote(1e8, resDefyBnb._reserve1, resDefyBnb._reserve0).call() / 1e18
	currentDefyToBnb = await pancakeContract.methods.quote(toHexString(1e18), resDefyBusd._reserve1, resDefyBusd._reserve0).call() / 1e18
	//$('.defy-bnb-price')[0].innerHTML = '1 Defy = '+currentBnbToDefy.toFixed(6)+' BNB'
	
	currentBusdToDefy = await pancakeContract.methods.quote(1e8, resDefyBusd._reserve0, resDefyBusd._reserve1).call() / 1e18
	$('.defy-pancake-price')[0].innerHTML = '~$'+currentBusdToDefy.toFixed(4)
	
	if(currentBusdToDefy*user.defy > currentApeBusdToDefy*user.defy)
		walletInt = setInterval(() => {
				$('.wallet-balance')[0].innerHTML = (currentBusdToDefy*user.defy).toFixed(3)+'$'
		}, 1000)
}

let currentApeBnbToDefy
let currentApeDefyToBnb

let currentApeBusdToDefy = 0
async function getApePrices(){
	let resDefyBnb = await defyBnbApeAuto.methods.getReserves().call()	
	let resDefyBusd = await defyBusdApeAuto.methods.getReserves().call()
	let roundData = await priceFeed.methods.latestRoundData().call()
	currentBnbPriceToUsd = roundData.answer / 1e8
	
	currentApeBnbToDefy = await apeContract.methods.quote(1e8, resDefyBnb._reserve1, resDefyBnb._reserve0).call() / 1e18
	currentApeDefyToBnb = await apeContract.methods.quote(toHexString(1e18), resDefyBusd._reserve1, resDefyBusd._reserve0).call() / 1e18
	
	currentApeBusdToDefy = await apeContract.methods.quote(1e8, resDefyBusd._reserve0, resDefyBusd._reserve1).call() / 1e18
	
	$('.defy-ape-price')[0].innerHTML = '~$'+currentApeBusdToDefy.toFixed(4)
	
	if(currentApeBusdToDefy*user.defy > currentBusdToDefy*user.defy)
		walletInt = setInterval(() => {
			$('.wallet-balance')[0].innerHTML = (currentBusdToDefy*user.defy).toFixed(3)+'$'
		}, 1000)
}
async function autoBalances(pid){
	let contract = pools[pid].contract
	let swapContract = pools[pid].swapContract

	rewardPerYear = parseInt(await farmAuto.methods.defyPerBlock().call()) * 20 * 60 * 24 * 365 / 1e8
	
	pools[pid].lpInFarm = parseInt(await contract.methods.balanceOf(farmAddress).call()) / 1e18
	
	let resLpToken = await contract.methods.getReserves().call()
	let currentLpTokenPrice = await swapContract.methods.quote(toHexString(1e18), resLpToken._reserve0, resLpToken._reserve1).call() / 1e18
		
	pools[pid].totalSupply = parseInt(await contract.methods.totalSupply().call()) / 1e18
	
	if(pid < 2){
		pools[pid].defyBal = parseInt(await defyAuto.methods.balanceOf(pools[pid].addr).call()) / 1e8
		$('.pool-apy-'+pid)[0].innerHTML = '' +(rewardPerYear / ( 2000/99 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(4) + '%'
	}else if(pid == 2){
		pools[pid].tndrBal = parseInt(await tndrAuto.methods.balanceOf(pools[pid].addr).call()) / 1e18
		$('.pool-apy-'+pid)[0].innerHTML = '' +(rewardPerYear / ( 2000/10 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].tndrBal) * 100).toFixed(4) + '%'
	}else if(pid > 2){
		pools[pid].defyBal = parseInt(await defyAuto.methods.balanceOf(pools[pid].addr).call()) / 1e8
		$('.pool-apy-'+pid)[0].innerHTML = '' +(rewardPerYear / ( 2000/396 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(4) + '%'
	}
}
function getLiqTotals(pid){
	if(pid == 0)
		getDefyBnbLiq(pid)
	if(pid == 1)
		getDefyBusdLiq(pid)
	if(pid == 2)
		getTndrBusdLiq(pid)
	if(pid == 3)
		getApeDefyBnbLiq(pid)
	if(pid == 4)
		getApeDefyBusdLiq(pid)
}

async function getDefyBnbLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await wbnbAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentBusdToDefy * token0Pool) + (token1Pool * currentBnbPriceToUsd)
	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}
async function getDefyBusdLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await busdAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
		
	pools[pid].lpTokenValueTotal = (currentBusdToDefy*token0Pool + token1Pool)
	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}
async function getTndrBusdLiq(pid){
	let contract = pools[pid].contract

	let token0Pool = await tndrAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await busdAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
	
	let resContract = await contract.methods.getReserves().call()
	
	let	token0Price = await pancakeContract.methods.quote(toHexString(pools[pid].token0Dec), resContract._reserve0, resContract._reserve1).call() / pools[pid].token1Dec
	
	pools[pid].lpTokenValueTotal = (token0Price*token0Pool + token1Pool)
	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}
async function getApeDefyBnbLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await wbnbAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentApeBusdToDefy * token0Pool) + (token1Pool * currentBnbPriceToUsd)
	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}
async function getApeDefyBusdLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await busdAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
		
	pools[pid].lpTokenValueTotal = (currentApeBusdToDefy*token0Pool + token1Pool)
	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}

