import React from 'react';
import styles from "../../style";
import Navbar from '../Navbar';
import { logo } from "../../assets";
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from '../Home';
import Cards from '../Client/Cards';
import TransactionHistory from '../Client/TransactionHistory';
import { loadAccount, loadWeb3, signMessage } from '../../functions';
import NavBar from '../Client/NavBar';
import { useEffect } from 'react';
import "./ClientLogin.css";

const ClientLogin = () => {
  const navigate = useNavigate();
  const [connected, setConnected] = useState(true);
  const [publicKey, setPublicKey] = useState('');
  const message = "Joshi is God";

  const connect = async () => {
    try {
      const web3 = window.web3;
      const account = await loadAccount();
      console.log(account);
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const signature = await signMessage(message, account);
      const counter_account = await web3.eth.personal.ecRecover(message, signature);
      console.log(counter_account);
      if (account.toLowerCase() === counter_account) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error connecting to wallet:', error);
      return false;
    }
  };

  const handleConnect = async (connected, setConnected) => {
    // let x = await connect();
    // console.log("Value of X is "+x);
    // if(x == true){
    //   console.log("Andar to aya hai ")
    navigate('/client')
    // }
  };
  useEffect(() => {
    // loadWeb3();
    // setPublicKey(loadAccount());
  }, []);



  return (
    <div className="bg-primary w-full h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <nav className="w-full flex py-6 justify-between items-center navbar">
            <Link to="/">
              <img src={logo} alt="Stacked Genesis" className="w-[200px] h-[52px] pt-[10px]" />
            </Link>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}>
                <div onClick={handleConnect}>
                  <Button buttonText={"Connect Wallet"} />
                </div>
              </li>
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <div onClick={handleConnect}>
                <Button buttonText={"Connect Wallet"} />
              </div>
            </div>
          </nav>
          <div className='notConnected' >You cannot access this Portal unless you are Signed in</div>
        </div>
      </div>
    </div>
  )
}


export default ClientLogin;
