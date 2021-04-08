import Web3 from 'web3'
import {
  web3Loaded,
  web3AccountLoaded,
} from './actions'

export const loadWeb3 = async (dispatch) => {
  if(typeof window.ethereum!=='undefined'){
    window.ethereum.autoRefreshOnNetworkChange = false;
    const web3 = new Web3(window.ethereum)
    dispatch(web3Loaded(web3))
    return web3
  } else {
    window.alert('Please install MetaMask')
    window.location.assign("https://metamask.io/")
  }
}

export const loadAccount = async (web3, dispatch) => {
  const accounts = await web3.eth.getAccounts()
  const account = await accounts[0]
  if(typeof account !== 'undefined'){
    dispatch(web3AccountLoaded(account))
    return account
  } else {
    dispatch(web3AccountLoaded(null))
    console.log('logout')
    return null
  }
}

export const update = async (dispatch) => {
  let account, web3

  web3 = await loadWeb3(dispatch)
  account = await loadAccount(web3, dispatch)
}