import { theme } from "../theme";

export const initialState = {
  balance: null,
  account: null,
  currentTheme: theme.dark,
  count: 0,
  connection: null
};

// export function web3(state = {}, action) {
//   switch (action.type) {
    // case 'WEB3_LOADED':
    //   return { ...state, connection: state.connection }
    // case 'WEB3_ACCOUNT_LOADED':
    //   return { ...state, account: state.account }
//     case 'ETHER_BALANCE_LOADED':
//       return { ...state, balance: state.balance }
//     default:
//       return state
//   }
// }

export function reducer(state, action) {
  switch (action.type) {
    case 'WEB3_LOADED':
      return { ...state, connection: action.payload }
    case 'WEB3_ACCOUNT_LOADED':
      return { ...state, account: action.payload }
    case 'increment':
      return { ...state, count: state.count + 1}
    case 'decrement':
      return { ...state, count: state.count - 1}
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
      throw new Error();
  }
}