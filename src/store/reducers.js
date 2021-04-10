import { theme } from "../styles/theme";
import { combineReducers } from 'redux';

export const initialState = {
  connection: null,
  network: null,
  account: null,
  balance: null,
  currentTheme: theme.dark,
  count: 0
};

// export function web3(state = {}, action) {
//   switch (action.type) {
//     case 'WEB3_LOADED':
//       return { ...state, connection: state.connection }
//     case 'WEB3_NETWOR_LOADED':
//       return { ...state, account: state.account }
//     case 'WEB3_ACCOUNT_LOADED':
//       return { ...state, account: state.account }
//     case 'ETHER_BALANCE_LOADED':
//       return { ...state, balance: state.balance }
//     default:
//       return state
//   }
// }

// function web3(state = initialState, action) {
//   switch (action.type) {
//     case 'WEB3_LOADED':
//       return { ...state, connection: action.payload }
//     case 'WEB3_NETWORK_LOADED':
//       return { ...state, network: action.payload }
//     case 'WEB3_ACCOUNT_LOADED':
//       return { ...state, account: action.payload }
//     case 'WEB3_BALANCE_LOADED':
//       return { ...state, balance: action.payload }
//     default:
//       return state
//   }
// }

// function reducer(state = {}, action) {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, count: state.count + 1 }
//     case 'decrement':
//       return { ...state, count: state.count - 1 }
//     default:
//       return state;
//   }
// }

// function themex(state = initialState, action) {
//   switch (action.type) {
//     case "setTheme":
//       return { ...state, currentTheme: theme.dark };
//     case "toggleTheme": {
//       const newThemeKey = state.currentTheme.id === "dark" ? "light" : "dark";
//       return { ...state, currentTheme: theme[newThemeKey] };
//     }
//     default:
//       return theme.dark;
//   }
// }

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'WEB3_LOADED':
      return { ...state, connection: action.payload }
    case 'WEB3_NETWORK_LOADED':
      return { ...state, network: action.payload }
    case 'WEB3_ACCOUNT_LOADED':
      return { ...state, account: action.payload }
    case 'WEB3_BALANCE_LOADED':
      return { ...state, balance: action.payload }
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case "setTheme":
      return { ...state, currentTheme: action.value };
    case "updateTheme":
      return {
        ...state,
        currentTheme: { ...theme[state.currentTheme.id], ...action.value }
      };
    case "toggleTheme": {
      const newThemeKey = state.currentTheme.id === "dark" ? "light" : "dark";
      return { ...state, currentTheme: theme[newThemeKey] };
    }
    default:
      return state;
  }
}

//export const rootReducer = combineReducers({ web3, reducer })

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, count: state.count + 1 }
//     case 'decrement':
//       return { ...state, count: state.count - 1 }
//     case "setTheme":
//       return { ...state, currentTheme: action.value };
//     case "updateTheme":
//       return {
//         ...state,
//         currentTheme: { ...theme[state.currentTheme.id], ...action.value }
//       };
//     case "toggleTheme": {
//       const newThemeKey = state.currentTheme.id === "dark" ? "light" : "dark";
//       return { ...state, currentTheme: theme[newThemeKey] };
//     }
//     default:
//       return state;
//   }
// }