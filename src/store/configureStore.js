import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { reducer } from './reducers'

const loggerMiddleware = createLogger()
const middleware = []

// For Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(preloadedState) {
  return createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware, loggerMiddleware))
  )
}