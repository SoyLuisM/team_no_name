import '../styles/globals.css'
import {
  PublicKey,
  Transaction,
} from "@solana/web3.js";

const DisplayEncoding = "utf8" | "hex";
const PhantomEvent = "disconnect" | "connect" | "accountChanged";
const PhantomRequestMethod =
  "connect" |
  "disconnect" |
  "signTransaction" |
  "signAllTransactions" |
  "signMessage";

const ConnectOpts = {
  onlyIfTrusted: false
};

const PhantomProvider = {
  publicKey: null,
  isConnected: null,
  
  signTransaction: async (transaction) => {
    return transaction;
  },
  
  signAllTransactions: async (transactions) => {
    return transactions;
  },
  
  signMessage: async (message, display) => {
    return;
  },
  
  connect: async (opts) => {
    return { publicKey: null };
  },
  
  disconnect: async () => {
    return;
  },
  
  on: (event, handler) => {},
  
  request: async (method, params) => {
    return;
  }
};

import { getProvider } from "./phantom.js";

// Usa getProvider aquí

/**
 * @description gets Phantom provider, if it exists
 */
const getProvider = () => {
  if ("solana" in window) {
    const provider = window.solana;
    
   
if (provider.isPhantom) return provider;
  }
};



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />

}



export default MyApp



