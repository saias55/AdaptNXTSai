import {BrowserRouter, Route, Switch} from 'react-router-dom'

import SlideBar from './components/SlideBar'
import Navbar from './components/Navbar'
import OrderPage from './components/OrderPage'
import NotFound from './components/NotFound'
import ProgressPage from './components/ProgressPage'

import './App.css'

const App = () => (
  <BrowserRouter>
    <div className="page-container">
      <Navbar />
      <div className="page-body">
        <SlideBar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={OrderPage} />

            <Route exact path="/DashBoard" component={ProgressPage} />
            <Route exact path="/Inventory" component={ProgressPage} />
            <Route exact path="/Shipping" component={ProgressPage} />
            <Route exact path="/Channel" component={ProgressPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
)

export default App
