import {FaArrowsAlt, FaSearch} from 'react-icons/fa'
import {Component} from 'react'

import OrderDetailsBox from '../OrderDetailsBox'
import PageSection from '../PageSection'

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
    customer: 'ajay kumar',
    orderValue: '100',
  },
  {
    id: 3,
    orderNo: 210000,
    orderDate: '20-2-2022',
    city: 'lucknow',
    customer: 'dooon kumar',
    orderValue: '100',
  },
  {
    id: 4,
    orderNo: 210000,
    orderDate: '20-2-2022',
    city: 'lucknow',
    customer: 'don',
    orderValue: '100',
  },
  {
    id: 5,
    orderNo: 210000,
    orderDate: '20-2-2022',
    city: 'lucknow',
    customer: 'vaishavi',
    orderValue: '100',
  },
  {
    id: 6,
    orderNo: 210000,
    orderDate: '20-2-2022',
    city: 'lucknow',
    customer: 'ragava',
    orderValue: '100',
  },
  {
    id: 11,
    orderNo: 2188888,
    orderDate: '20-2-2022',
    city: 'lucknow',
    customer: 'suresh kumar',
    orderValue: '100',
  },
  {
    id: 21,
    orderNo: 2188888,
    orderDate: '20-2-2022',
    city: 'lucknow',
    customer: 'vinay kumar',
    orderValue: '100',
  },
  {
    id: 31,
    orderNo: 210000,
    orderDate: '20-2-2022',
    city: 'lucknow',
    customer: 'rajraj',
    orderValue: '100',
  },
  {
    id: 41,
    orderNo: 210000,
    orderDate: '20-2-2022',
    city: 'lucknow',
    customer: 'donade',
    orderValue: '100',
  },
  {
    id: 51,
    orderNo: 210000,
    orderDate: '20-2-2022',
    city: 'lucknow',
    customer: 'hello',
    orderValue: '100',
  },
  {
    id: 61,
    orderNo: 210000,
    orderDate: '20-2-2022',
    city: 'lucknow',
    customer: 'hiiii',
    orderValue: '100',
  },
]

class OrderPending extends Component {
  state = {searchValue: '', start: 0, end: 5, num: 1}

  onSearching = event => this.setState({searchValue: event.target.value})

  increasingEnd = () => {
    const len = orderDetails.length
    const {end} = this.state
    if (end < len) {
      this.setState(prevState => ({end: prevState.end + 5}))
      this.setState(prevState => ({start: prevState.start + 5}))
      this.setState(prevState => ({num: prevState.num + 1}))
    }
  }

  decreasingEnd = () => {
    const {start} = this.state
    if (start >= 1) {
      this.setState(prevState => ({end: prevState.end - 5}))
      this.setState(prevState => ({start: prevState.start - 5}))
      this.setState(prevState => ({num: prevState.num - 1}))
    }
  }

  render() {
    const {searchValue, start, end, num} = this.state
    console.log(start)
    console.log(end)

    const filtered = orderDetails.filter(eachItem =>
      eachItem.customer.toLowerCase().includes(searchValue.toLowerCase()),
    )

    const somee = filtered.slice(start, end)
    console.log(somee)

    return (
      <div className="order-pending-bgc">
        <div className="space-between">
          <div>
            <button
              type="button"
              className="order-pending-button-details importButton"
            >
              Import
            </button>

            <button
              type="button"
              className="order-pending-button-details acceptButton"
            >
              Accept
            </button>
            <button
              type="button"
              className="order-pending-button-details printButton"
            >
              Print
            </button>
          </div>
          <div>
            <button
              type="button"
              className="order-pending-button-details refreshButton"
            >
              Refresh
            </button>
          </div>
        </div>
        <br />
        <input
          type="text"
          placeholder="search by customer name"
          value={searchValue}
          onChange={this.onSearching}
          className="inputDetails"
        />
        <br />
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
          {somee.map(eachOrder => (
            <OrderDetailsBox eachOrder={eachOrder} key={eachOrder.id} />
          ))}
        </ul>
        <hr />
        <div className="display-end">
          <PageSection
            increasingEnd={this.increasingEnd}
            num={num}
            decreasingEnd={this.decreasingEnd}
          />
        </div>
      </div>
    )
  }
}

export default OrderPending
