import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import mainReducer from './main-reducer'

const middleWare = [logger]

const store = createStore(mainReducer, applyMiddleware(...middleWare))

export default store