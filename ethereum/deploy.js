const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
	'salad cinnamon juice man cup mixed coin sea warrior hobby reward visa',
	'https://rinkeby.infura.io/O2y6FbibxJHHd5EF1Gmd'
);

const web3 = new Web3(provider);

// Helper to use asyn await
const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: '0x' + compiledFactory.bytecode })
		.send({ gas: '2000000', from: accounts[0] });

	console.log('Contract deployed to', result.options.address);
};

deploy();

