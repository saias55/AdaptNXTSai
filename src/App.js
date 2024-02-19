import {BrowserRouter, Route, Switch} from 'react-router-dom'

import SlideBar from './components/SlideBar'
import Navbar from './components/Navbar'
import OrderPage from './components/OrderPage'

import './App.css'

const App = () => (
  <BrowserRouter>
    <div className="page-container">
      <Navbar />
      <div className="page-body">
        <SlideBar />
        <Switch>
          <div className="content">
            <Route exact path="/" component={OrderPage} />
          </div>
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

export default App
