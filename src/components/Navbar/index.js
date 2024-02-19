import {FaRegMoon, FaRegBookmark} from 'react-icons/fa'
import {IoIosNotificationsOutline} from 'react-icons/io'

import './index.css'

const Navbar = () => (
  <nav className="page-navbar">
    <img
      src="https://adaptnxt.com/wp-content/uploads/2023/11/adaptnxt-final_purple-rect-_19Nov-300x511-1.png"
      alt="adaptNxt"
    />
    <div className="nav-icons-margin-top">
      <FaRegMoon className="moon-logo" />
      <IoIosNotificationsOutline className="moon-logo" />
      <FaRegBookmark className="moon-logo" />
    </div>
  </nav>
)

export default Navbar
