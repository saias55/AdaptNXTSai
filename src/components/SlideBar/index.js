import {IoIosSpeedometer} from 'react-icons/io'
import {FaShareAlt} from 'react-icons/fa'
import {LiaShippingFastSolid} from 'react-icons/lia'
import {RxBorderSplit} from 'react-icons/rx'
import {MdOutlineInventory2} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {Component} from 'react'

import './index.css'

class SlideBar extends Component {
  state = {currentPath: '/'}

  dash = () => this.setState({currentPath: '/DashBoard'})

  inventory = () => this.setState({currentPath: '/Inventory'})

  onClickingOrder = () => this.setState({currentPath: '/'})

  onClickingShip = () => this.setState({currentPath: '/ship'})

  onClickingChannel = () => this.setState({currentPath: '/channel'})

  render() {
    const {currentPath} = this.state
    const orderClass = currentPath === '/' ? 'lightBlue' : null
    const dashe = currentPath === '/DashBoard' ? 'lightBlue' : null
    const inven = currentPath === '/Inventory' ? 'lightBlue' : null
    const ship = currentPath === '/ship' ? 'lightBlue' : null
    const channel = currentPath === '/channel' ? 'lightBlue' : null

    return (
      <div className="sidebar">
        <div className={`display-flex ${dashe}`}>
          <IoIosSpeedometer className="icon-size" />
          <Link to="/DashBoard" className="link-details">
            <button
              onClick={this.dash}
              type="button"
              className="button-details"
            >
              DashBoard
            </button>
          </Link>
        </div>

        <div className={`display-flex ${inven}`}>
          <MdOutlineInventory2 className="icon-size" />
          <Link to="/Inventory" className="link-details">
            <button
              type="button"
              onClick={this.inventory}
              className="button-details"
            >
              Inventory
            </button>
          </Link>
        </div>
        <div className={`display-flex ${orderClass}`}>
          <RxBorderSplit className="icon-size" />
          <Link to="/" className="link-details">
            <button
              type="button"
              onClick={this.onClickingOrder}
              className="button-details"
            >
              Orders
            </button>
          </Link>
        </div>
        <div className={`display-flex ${ship}`}>
          <LiaShippingFastSolid className="icon-size" />
          <Link to="/Shipping" className="link-details">
            <button
              type="button"
              onClick={this.onClickingShip}
              className="button-details"
            >
              Shipping
            </button>
          </Link>
        </div>
        <div className={`display-flex ${channel}`}>
          <FaShareAlt className="icon-size" />
          <Link to="/Channel" className="link-details">
            <button
              type="button"
              onClick={this.onClickingChannel}
              className="button-details"
            >
              Channel
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default SlideBar
