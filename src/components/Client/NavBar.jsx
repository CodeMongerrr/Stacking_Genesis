import React, { useState } from 'react';

const NavBar = () => {
    const [connected, setConnected] = useState(false);
    const [publicKey, setPublicKey] = useState('');
    const [avatar, setAvatar] = useState('');

    const connectWallet = async () => {
        try {
            // Request connection to the Metamask wallet
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length > 0) {
                // Set the public key and avatar
                setPublicKey(accounts[0]);
                // Perform any additional actions on connection
                setConnected(true);
                // Assume the avatar is retrieved from some external source based on the public key
                setAvatar('avatar_url_here');
            }
        } catch (error) {
            console.error('Error connecting to wallet:', error);
        }
    };

    return (
        <nav>
            <div className="logo">Your Logo</div>
            {!connected ? (
                <button onClick={connectWallet}>Connect Wallet</button>
            ) : (
                <div className="user-card">
                    <img src={avatar} alt="User Avatar" />
                    <p>Connected Account: {publicKey}</p>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
