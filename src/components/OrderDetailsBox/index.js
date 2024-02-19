import './index.css'

const OrderDetailsBox = props => {
  const {eachOrder} = props
  const {orderNo, orderDate, city, customer, orderValue} = eachOrder
  return (
    <li className="li-items-flex margin-botton">
      <div className="display-flex-1">
        <p>+</p>
        <input type="checkbox" />
        <img
          src="https://freelogopng.com/images/all_img/1655837345shopify-png-icon.png"
          alt="company logo"
          className="logo-image-details"
        />
      </div>
      <div className="space display-flex-2">
        <p>{orderNo}</p>
      </div>
      <div className="display-flex-3">
        <p>{orderDate}</p>
      </div>
      <div className="display-flex-4">
        <p>{city}</p>
      </div>
      <div className="display-flex-5">
        <p>{customer}</p>
      </div>
      <div className="display-flex-6">
        <p>{orderValue}</p>
      </div>

      <div className="display-flex-7">
        <button type="button" className="pending-button">
          Pending
        </button>
      </div>

      <div className="display-flex-8">
        <button type="button" className="pending-button">
          Actions
        </button>
      </div>
    </li>
  )
}

export default OrderDetailsBox
