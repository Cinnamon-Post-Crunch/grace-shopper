import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import products from './products'
import cart from './cart'
import orders from './orders'
import users from './users'
import paymentStatus from './payment'
import allOrders from './allOrders'

const reducer = combineReducers({
  user,
  products,
  cart,
  orders,
  users,
  paymentStatus,
  allOrders
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './products'
