import {Component} from 'react'

import OrderPending from '../OrderPending'
import './index.css'

class OrderPage extends Component {
  state = {currentOrderStatus: 'pending'}

  render() {
    const {currentOrderStatus} = this.state
    const pending = currentOrderStatus === 'pending' ? 'text-de' : null

    return (
      <div>
        <h1 className="head-details">Orders</h1>
        <ul className="unorder-details">
          <li className={`order-deader-details ${pending}`}>Pending</li>

          <li className="order-deader-details">Accepted</li>
          <li className="order-deader-details">AWB Created</li>
          <li className="order-deader-details">Ready To Ship</li>
          <li className="order-deader-details">Shipped</li>
          <li className="order-deader-details">Completed</li>
          <li className="order-deader-details">Cancelled</li>
        </ul>
        <div>{currentOrderStatus === 'pending' ? <OrderPending /> : null}</div>
      </div>
    )
  }
}

export default OrderPage
