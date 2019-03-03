import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from './logger'

import allReducers from '../reducers/root'

export default() => {
  const middleware = [logger, thunk]
  const enhancers = []

  const middlewareEnchancer = applyMiddleware(...middleware)

  enhancers.push(middlewareEnchancer)

  const store = createStore(allReducers, {}, composeWithDevTools(...enhancers))

  return store
}