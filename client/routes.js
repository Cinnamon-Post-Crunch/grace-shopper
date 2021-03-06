import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup} from './components'
import {me} from './store'
import CartView from './components/cart-view'
import AllProducts from './components/products-home'
import UserProfile from './components/user-profile'
import EditUserProfile from './components/edit-user-profile'
import Checkout from './components/checkout'
import OrdersView from './components/orders-view'
import detailedProduct from './components/detailed-product'
import AdminUsers from './components/admin-users'
import AdminOrders from './components/admin-orders'
import Admin from './components/admin'
import NotFound from './components/not-found'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        <Route exact path="/products" component={AllProducts} />
        <Route path="/home" component={AllProducts} />
        <Route path="/products/:id" component={detailedProduct} />
        <Route path="/users/profile" component={UserProfile} />
        <Route path="/users/edit-profile/:userid" component={EditUserProfile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={AllProducts} />
        <Route path="/cart" component={CartView} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/users/:userId/orders" component={OrdersView} />
        <Route path="/api/" component={AllProducts} />
        <Route path="/admin/users" component={AdminUsers} />
        <Route path="/admin/orders" component={AdminOrders} />
        <Route path="/admin" component={Admin} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
