import React from 'react'
import {withRouter} from 'react-router'
import OrderProductItem from './order-product-item'
import convertToDollars from '../../utils/utils'

class OrdersItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(currentState => ({showDetails: !currentState.showDetails}))
  }

  render() {
    const order = this.props.order
    return (
      <div className="orders-item">
        <div className="orders-header">
          <h2>Order Number: {order.id}</h2>
          <p onClick={() => this.handleClick(order.id)} className="orders-btn">
            View Order Details
          </p>
        </div>
        {this.state.showDetails ? (
          <div className="orders-details">
            {order.products.map(product => (
              <OrderProductItem key={product.id} product={product} />
            ))}
            <h3>Total Price: {convertToDollars(order.totalPrice)}</h3>
            {order.user ? <h3>User: {order.user.email}</h3> : null}
          </div>
        ) : null}
      </div>
    )
  }
}

export default withRouter(OrdersItem)
