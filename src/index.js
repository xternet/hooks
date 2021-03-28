import { createGlobalStyle, ThemeProvider } from "styled-components"
import React, { createContext, useReducer } from "react"
import {initialState, reducer} from "./store/reducers"
import { update } from "./store/interactions"
import { web3Loaded } from "./store/actions"
import Content from "./components/Content"
import Nav from "./components/Nav"
import Web3 from "web3"
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'


/* t0d0:
 * [x] Intergrate web3 in index.js
 * [ ] Integrate web3 via interactions.js
 *
*/
export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  if(window.ethereum && state.connection===null){
    update(dispatch)

    window.ethereum.on('accountsChanged', () => { update(dispatch) });
    window.ethereum.on('chainChanged', () => { update(dispatch) });
  }

  console.log('state web3', state.connection)
  console.log('state account', state.account)

  return (
    <ThemeProvider theme={state.currentTheme}>
      <AppContext.Provider value={{ ...state, dispatch }}>
        <GlobalStyles />
        <Nav />
        <Content />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

// const x = (dispatch) => {
//   update(dispatch)
// }

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    color: ${props => props.theme.textColorContent};
    font-family: monospace;
  }
`;

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)