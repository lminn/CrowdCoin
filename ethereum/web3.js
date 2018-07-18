import Web3 from 'web3';

let web3;

// Checks to see if the code is being executed in the browser
// and if the user has the metamask plugin
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	// We are in the browser and metamask is running
	web3 = new Web3(window.web3.currentProvider);
} else {
	// We are on the server OR the user is not running metamask
	const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/O2y6FbibxJHHd5EF1Gmd');
	web3 = new Web3(provider);
}

// For executing in browser, not on server
// const web3 = new Web3(window.web3.currentProvider);

export default web3;
