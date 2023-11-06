import React from 'react'
import styles from "../../style";
import Navbar from '../Navbar';
import { logo } from "../../assets"
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from '../Home';
import Cards from './Cards';
import TransactionHistory from './TransactionHistory';
import { loadAccount, loadWeb3, signMessage } from '../../functions';
import NavBar from './NavBar';
import { useEffect } from 'react';
import "./functions";
import "./ClientPortal.css";
import { NFTn, countdown, loadContract, mintNFT, getStakedNFTs, StakeNFT, nStakedNFTs, getStakeEnds, stakeNFTs, getUnstakedNFTs, getContractTransactions } from './functions';
import CardX from './CardX';
import { Popup } from './Popup';
const ClientPortal = () => {
  const [publicKey, setPublicKey] = useState('0xDb1cd93e3924048EcfcBD66B6b81290FB9A508d6');
  const [nnft, setnnft] = useState(7);
  const [Time, setTime] = useState([])
  const [nstakednfts, setnstakednfts] = useState(2);
  const [stakedNFTs, setStakedNFTs] = useState([])
  const [open, setOpen] = useState(true);
  const [roi, setroi] = useState(314)
  const handleConnect = async () => {
    const acc = await loadAccount();
    setPublicKey(acc);
  };
  const handleMint = async () => {
    getContractTransactions('0xDfaa40CE1E799b2Edeed3c509Ce4ec4a6B502b18', '0xDb1cd93e3924048EcfcBD66B6b81290FB9A508d6');
  }

  const fetch = async () => {
    await getStakedNFTs();
    const time = await getStakeEnds();
    let min = [];
    min[0] = time[0];
    for (let i = 1; i < time.length; i++) {
      if (min[0] > time[i]) {
        min[0] = time[i];
      }
    }
    console.log(min);
    min[0] = await countdown(min[0]);
    setTime(min);
    setnnft(await NFTn());
    setnstakednfts(await nStakedNFTs());
  }
  useEffect(() => {
    // loadWeb3();
    // loadContract();
    // fetch();
    // handleConnect();
  }, []);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <nav className="w-full flex py-6 justify-between items-center navbar">
            <Link to="/">
              <img src={logo} alt="Stacked Genesis" className="w-[200px] h-[52px] pt-[10px]" />
            </Link>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              <li

                className={`font-poppins font-normal cursor-pointer text-[16px] text-white"
                 mr-10`}
              >
                <div className="user-card">

                  <Button buttonText={publicKey} />
                  {/* <div onClick={handleMint}>
                    <Button buttonText={"Mint an NFT"} />
                  </div> */}
                </div>

              </li>
            </ul>
          </nav>
          <Cards width="30vw" height="200px" title="Total Value Locked in-" titleFontSize="18px" content={nnft + ",000 USDTs"} contentFontSize="40px" />
          <Cards width="20vw" height="200px" title="Number of NFTs-" titleFontSize="18px" content={nnft + " NFTs"} contentFontSize="40px" />
          <Cards width="30vw" height="200px" title="ROI Claimed-" titleFontSize="18px" content={"$ "+ roi} contentFontSize="40px" />
          <Cards width="20vw" height="200px" title="Staked NFTs-" titleFontSize="18px" content={nstakednfts} contentFontSize="40px" />


          {
            !(nnft - nstakednfts) ? (
              <>
                <Cards width="20vw" height="200px" title="Unstaked NFTs" titleFontSize="18px" content={" " + (nnft - nstakednfts)} contentFontSize="40px" />
                <CardX buttonMargin="16vw" buttonText={"Mint"} buttonFunction={mintNFT} width="40vw" height="200px" title="Buy more via Crypto-" titleFontSize="18px" content={"Mint an NFT"} contentFontSize="30px" />
              </>
            ) : (
              <>
                <CardX buttonMargin="13vw" buttonText={"Stake NFTs"} buttonFunction={stakeNFTs} width="30vw" height="200px" title="Unstaked NFTs" titleFontSize="18px" content={" " + (nnft - nstakednfts)} contentFontSize="40px" />
                <CardX buttonMargin="6vw" buttonText={"Mint"} buttonFunction={mintNFT} width="30vw" height="200px" title="Buy more via Crypto-" titleFontSize="18px" content={"Mint an NFT"} contentFontSize="30px" />
              </>
            )
          }

          {/* <CardX width="13.6vw" height="13.6vw" title="Number of NFTs" titleFontSize="18px" content={nnft} contentFontSize="40px" /> */}
          {Time.map((context, index) => (
            <Cards
              key={index} // Make sure to provide a unique key for each element in the array
              width="86vw"
              height="200px"
              title="Next Claim-"
              titleFontSize="18px"
              content={context} // Set the content dynamically from the array
              contentFontSize="45px"
            />
          ))}
          {/* gradient start */}
          <div className="absolute z-[100] -left-1/2 top-60 w-[50%] h-[30%] rounded-full white__gradient" />
          {/* gradient end */}
          <TransactionHistory />
          {/* <div>
            <button onClick={() => setOpen(true)}> Click to Open Popup</button>
            {open ? <Popup text="Hello there!" closePopup={() => setOpen(false)} /> : null}
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default ClientPortal;