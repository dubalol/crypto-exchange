import React, { useState } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Redirect } from 'react-router';

import Orderbook from './orderbook.jsx';
import { Portfolio } from './portfolio.jsx';


// Login Screen: currently takes only username which gets stored in
// database as unique key for account information

// Eventually to include password hashing and OAuth

// User tries to login and is verified against the database.
// If successful, user is rerouted back to orderbook with their portfolio displayed.

function LoginPage() {
  const [isLoggedIn, updateLogin] = useState(false);
  const [asks, updateAsks] = useState([5, 5, 5, 5, 3]); // 5 latest asks
  const [bids, updateBids] = useState([2, 2, 2, 2, 1]); // 5 latest bids
  const [portfolio, updatePortfolio] = useState(['user', 10000, 0]); // user, usd, eth balances

  let username = '';

  const handleClick = () => {
    // Fetch to server with username

    // Upon successful response

    // updateAsks()
    // updateBids()
    updateLogin(true);
  };

  const storeUsername = (e) => {
    username = e.target.value;
  };

  let conditionalRenders;

  if (isLoggedIn) {
    conditionalRenders = <Redirect to="/" />;
  } else {
    conditionalRenders = <h1>Provide a valid log in</h1>;
  }

  return (
    <div>
      <input type="text" onChange={storeUsername} placeholder="username" />
      <button type="submit" onClick={handleClick}>Login</button>
      {conditionalRenders}
      <Router>
        {/* <Route exact path="/loginPage">
          <div>LoginPage</div>
          <button type="submit">
            <Link to="/">To Orderbook</Link>
          </button>
        </Route> */}
        {/* <Route exact path="/" render={() => <Orderbook asks={asks} bids={bids} />} />
        <Route exact path="/" render={() => <Portfolio portfolio={portfolio} />} /> */}
      </Router>
    </div>
  );
}

export default LoginPage;
