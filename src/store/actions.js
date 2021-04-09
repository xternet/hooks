//WEB3
export function web3Loaded(connection) {
  return {
    type: 'WEB3_LOADED',
    payload: connection
  }
}

export function web3AccountLoaded(account) {
  return {
    type: 'WEB3_ACCOUNT_LOADED',
    payload: account
  }
}

// export function add() {
//   return {
//     type: 'increment',
//   }
// }

const increment = () => {
  return {
    type: "increment"
  }
}

export default increment