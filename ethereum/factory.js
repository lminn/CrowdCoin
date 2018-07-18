import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x6c0D7C99e34AAc4D6E805E07d1C6502935eC7028'
);

export default instance;
