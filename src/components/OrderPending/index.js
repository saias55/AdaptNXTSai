import {FaArrowsAlt, FaSearch} from 'react-icons/fa'

import OrderDetailsBox from '../OrderDetailsBox'

import './index.css'

const orderDetails = [
  {
    id: 1,
    orderNo: 2188888,
    orderDate: '20-2-2022',
    city: 'lucknow',
    customer: 'sai kumar',
    orderValue: '100',
  },
  {
    id: 2,
    orderNo: 2188888,
    orderDate: '20-2-2022',
    city: 'lucknow',
    customer: 'sai kumar',
    orderValue: '100',
  },
  {
    id: 3,
    orderNo: 210000,
    orderDate: '20-2-2022',
    city: 'lucknow',
    customer: 'sai kumar',
    orderValue: '100',
  },
]

const OrderPending = () => (
  <div className="order-pending-bgc">
    <div className="space-between">
      <div>
        <button type="button" className="order-pending-button-details">
          Import Orders
        </button>
        <button type="button" className="order-pending-button-details">
          Accept
        </button>
        <button type="button" className="order-pending-button-details">
          Print
        </button>
      </div>
      <div>
        <button type="button" className="order-pending-button-details">
          Refresh
        </button>
      </div>
    </div>
    <ul className="pending-unordered-details min-heigh">
      <li className="li-items-flex">
        <input type="checkbox" />
        <div className="display-flex-1">
          <p>Channel</p>
          <FaArrowsAlt className="icon-details-size" />
        </div>
        <div className="display-flex-2">
          <p>Order No</p>
          <FaSearch className="icon-details-size" />
        </div>
        <div className="display-flex-3">
          <p>Order Date</p>
          <FaArrowsAlt className="icon-details-size" />
        </div>
        <div className="display-flex-4">
          <p>City</p>
          <FaArrowsAlt className="icon-details-size" />
        </div>
        <div className="display-flex-5">
          <p>Customer Name</p>
          <FaSearch className="icon-details-size" />
        </div>
        <div className="display-flex-6">
          <p>Order Value</p>
          <FaArrowsAlt className="icon-details-size" />
        </div>
        <div className="display-flex-7">
          <p>Status</p>
          <FaArrowsAlt className="icon-details-size" />
        </div>
        <div className="display-flex-8">
          <p>Operation</p>
        </div>
      </li>
      <hr />
      {orderDetails.map(eachOrder => (
        <OrderDetailsBox eachOrder={eachOrder} key={eachOrder.id} />
      ))}
    </ul>
    <hr />
  </div>
)

export default OrderPending
