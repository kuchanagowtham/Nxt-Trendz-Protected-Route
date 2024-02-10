import {Switch, Route, Redirect} from 'react-router-dom'

import ProductRoute from './components/ProtectedRoute'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProductRoute exact path="/" component={Home} />
    <ProductRoute exact path="/products" component={Products} />
    <ProductRoute exact path="/cart" component={Cart} />
    <Route component={NotFound} />
  </Switch>
)

export default App
