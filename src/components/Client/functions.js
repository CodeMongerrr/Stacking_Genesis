import Web3 from "web3";
// import lighthouse from "@lighthouse-web3/sdk";
// import axios from "axios";
import abi from "./Contract/contractABI.json";
import USDTabi from "./Contract/contractUSDTABI.json";
let account = [];
let contract = null;
const message = "Joshi hai God";
const Stacked_Genesis = "0xDfaa40CE1E799b2Edeed3c509Ce4ec4a6B502b18";
let USDT = null;

export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x13881" }], // chainId must be in hexadecimal numbers
    });
    await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x13881" }], // chainId must be in hexadecimal numbers
    });
  } else {
    window.alert("Non Ethereum browser detected");
  }
};
export const loadAccount = async () => {
  const web3 = new Web3(window.web3.currentProvider);
  const accounts = await web3.eth.getAccounts();
  const acc = accounts[0];
  account = acc;
  return account;
};
export const signMessage = async (api_msg) => {
  const web3 = window.web3;
  const signature = await web3.eth.personal.sign(
    api_msg,
    account,
    "Aditya111$"
  );
  return signature;
};
export const loadUSDTContract = async () => {
  const web3 = window.web3;
  loadAccount();
  const contract_abi = USDTabi;
  const contract_address = "0xEeB06bfC9Ca92566c8914FE515EB595004aE44fa";
  const usdt_contract = new web3.eth.Contract(contract_abi, contract_address);
  USDT = usdt_contract;
};
export const loadContract = async () => {
  const web3 = window.web3;

  loadAccount();
  // const network_id = await web3.eth.net.getId();
  const contract_abi = abi;

  const contract_address = "0xDfaa40CE1E799b2Edeed3c509Ce4ec4a6B502b18";
  const stacked_genesis = new web3.eth.Contract(contract_abi, contract_address);
  contract = stacked_genesis;
};

export const mintNFT = async (amount) => {
  loadAccount();
  loadUSDTContract();
  const approve = await USDT.methods
    .approve(Stacked_Genesis, 10000 * 10 ** 6)
    .send({ from: account })
    .on("transactionHash", function (hash) {})
    .then(
      console.log("Entered"),
      await contract.methods
        .mint(1)
        .send({ from: account })
        .on("transactionHash", function (hash) {})
        .then()
    );
};
export const NFTn = async () => {
  const acc = await loadAccount();
  const result = await contract.methods.balanceOf(acc).call();
  return result;
};
export const nStakedNFTs = async () => {
  const acc = await loadAccount();
  const tokenIds = await contract.methods.getStakedNFTbyAddress(acc).call();
  const numberOfStakedNFTs = tokenIds.length;
  return numberOfStakedNFTs;
};
export const countdown = async (unixTimestamp) => {
  const targetDate = new Date(unixTimestamp * 1000); // Convert UNIX timestamp to milliseconds
  const now = new Date();
  const remainingTime = (targetDate - now) / 1000; // Convert to seconds

  if (remainingTime <= 0) {
    return "Countdown has ended.";
  }

  const days = Math.floor(remainingTime / 86400);
  const hours = Math.floor((remainingTime % 86400) / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = Math.round(remainingTime % 60);

  return `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
};

export const getStakeEnds = async () => {
  try {
    const acc = await loadAccount();
    const tokenIds = await contract.methods.getStakedNFTbyAddress(acc).call();
    const stakends = [];
    for (let i = 0; i < tokenIds.length; i++) {
      const tokenId = tokenIds[i];
      const stakeData = await contract.methods.stakedNFTs(tokenId).call();
      const startAt = new Date(stakeData.startAt * 1000);
      const endAt = new Date(stakeData.endAt * 1000);
      stakends.push(stakeData.endAt);
    }
    return stakends;
  } catch (error) {
    console.error("Error occurred:", error);
  }
};
export const getUnstakedNFTs = async () => {
  try {
    const acc = await loadAccount();
    const stakedTokenIds = await getStakedNFTs();
    const ownedTokenIds = await contract.methods.getNFTbyOwner(acc).call();
    const unstakedTokenIds = await ownedTokenIds.filter(
      (tokenId) => !stakedTokenIds.includes(tokenId)
    );
    console.log("Owned TokenIds" + ownedTokenIds);
    console.log("Staked TokenIds" + stakedTokenIds);
    console.log("Unstaked TokenIds" + unstakedTokenIds);
    return unstakedTokenIds;
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

export const getStakedNFTs = async () => {
  try {
    const acc = await loadAccount();
    const tokenIds = await contract.methods.getStakedNFTbyAddress(acc).call();
    console.log(tokenIds);
    return tokenIds;
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

export const stakeNFTs = async () => {
  try {
    const acc = await loadAccount();
    const tokenIds = await getUnstakedNFTs();
    console.log(tokenIds);
    for (let i = 0; i < tokenIds.length; i++) {
      // for(let j = 0; j < tokenIds.length; i++){
      //   // const result = await contract.methods.approve(acc, tokenIds[j]);
      //   console.log(result);
      // }
      const result = contract.methods
        .batchStakeNFT(tokenIds, 30)
        .send({ from: account })
        .on("transactionHash", function (hash) {})
        .then();
    }
  } catch (error) {
    console.error("Error occured:", error);
  }
};
export const StakeNFT = async (tokenIds, timeInDays) => {
  try {
    const acc = await loadAccount();
    const approvalResult = await contract.methods
      .approve(contract.options.address, tokenId)
      .send({ from: acc });
    if (timeInDays < 30) {
      console.error("Minimum staking period is 30 days.");
      return;
    }
    const stakeResult = await contract.methods
      .stakeNFT(tokenId, timeInDays)
      .send({ from: acc });
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

export const getContractTransactions = async (
  contractAddress,
  walletAddress
) => {
  try {
    const web3 = window.web3;
    const transactionHistory = await web3.eth.getTransactionHistory(
      "0xDb1cd93e3924048EcfcBD66B6b81290FB9A508d6"
    );
    const transactions = transactionHistory.filter(
      (transaction) => transaction.to === contractAddress
    );
    console.log(transactions);
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

// getContractTransactions(
//   "0xDfaa40CE1E799b2Edeed3c509Ce4ec4a6B502b18",
//   "0xDb1cd93e3924048EcfcBD66B6b81290FB9A508d6"
// );
