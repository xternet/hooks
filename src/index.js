import { createGlobalStyle, ThemeProvider } from "styled-components"
import { createStore, applyMiddleware, compose } from 'redux'
import React, { createContext, useReducer } from "react"
import { initialState, reducer } from "./store/reducers"
import { update } from "./store/interactions"
import { createLogger } from 'redux-logger'
import Content from "./components/Content"
import { Provider, useSelector, useDispatch, shallowEqual } from "react-redux"
import Nav from "./components/Nav"
import ReactDOM from "react-dom"
import { theme } from "./theme"

/* t0d0:
 * integrate connect button
 * if logged in appear address
*/
export const AppContext = createContext();

function App() {
  const account = useSelector(state => state.account);
  const connection = useSelector(state => state.connection);
  const currentTheme = useSelector(state => state.currentTheme);
  const toggleTheme = useSelector(state => state.toggleTheme);

  const dispatch = useDispatch();

  if(window.ethereum && connection===null){
    update(dispatch)

    window.ethereum.on('accountsChanged', () => { update(dispatch) });
    window.ethereum.on('chainChanged', () => { update(dispatch) });
  }

  // console.log('state web3', state.connection)
  // console.log('state account', state.account)
  return (
    <ThemeProvider theme={currentTheme}>
      <AppContext.Provider value={toggleTheme}>
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

const loggerMiddleware = createLogger()
const middleware = []

// For Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

ReactDOM.render(
  <Provider store={
    createStore(
      reducer,
      initialState,
      composeEnhancers(applyMiddleware(...middleware, loggerMiddleware))
      )}>
    <App />
  </Provider>,
  document.getElementById("root")
);