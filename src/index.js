import { createGlobalStyle, ThemeProvider } from "styled-components"
import React, { createContext, useReducer } from "react"
import { initialState, reducer } from "./store/reducers"
import { update } from "./store/interactions"
import Content from "./components/Content"
import { Provider } from "react-redux"
import { createStore } from "redux"
import Nav from "./components/Nav"
import ReactDOM from "react-dom"
import { theme } from "./theme"

/* t0d0:
 * integrate connect button
 * if logged in appear address
*/


export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  if(window.ethereum && state.connection===null){
    update(dispatch)

    window.ethereum.on('accountsChanged', () => { update(dispatch) });
    window.ethereum.on('chainChanged', () => { update(dispatch) });
  }

  // console.log('state web3', state.connection)
  // console.log('state account', state.account)
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
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);