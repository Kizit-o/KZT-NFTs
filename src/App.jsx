import React from "react";
import './App.css';
import Slider from './components/Slider';

function App() {
  return (
    <div>
      <header data-aos="fade-down" data-aos-duration="800">
        <div className="logo" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
          KZT-NFTs
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <button id="walletConnect" className="wallet-connect">Connect Wallet</button>
        </nav>
      </header>

      <Slider />
    </div>
  );
}

export default App;
