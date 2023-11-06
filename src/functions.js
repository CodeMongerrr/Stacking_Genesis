import Web3 from "web3";
let account = [];
let message = "Joshi is God";
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
export const connect = async (connected) => {
  const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];

  await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const signature = await signMessage(message, account);
  const counter_account = await web3.eth.personal.ecRecover(message, signature);
  let data = {
    public_key: counter_account,
  };
  console.log(counter_account);
  if (account.toLowerCase() === counter_account) {
    console.log("Entered");
    setConnected(true);
    return true;
  } else {
    return false;
  }
};
// Function to sign a message using MetaMask
export const signMessage = async (message) => {
  try {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      const signature = await window.ethereum.request({
        method: "personal_sign",
        params: [message, account],
      });
      console.log(signature)
      return signature;
    } else {
      throw new Error("MetaMask is not installed");
    }
  } catch (error) {
    console.error("Error signing message:", error);
    return null;
  }
};

