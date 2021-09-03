import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login'
import Payment from './Payment'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import './App.css';

const promise = loadStripe("pk_test_51JI9RpG4OyyP4qfKpCZQ71OhWp05yBLEdMe6XrXI0k8prVBYpibGeO8Ed8xI1YTD2PN8LSXjUsDuXVZclZJM2xV100A6Pqqns0")

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    // Detect auth state
    onAuthStateChanged(auth, user => {
      if (user !== null) {
        dispatch({
            type: 'SET_USER',
            user: user
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
