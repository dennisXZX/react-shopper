import React, { Component } from 'react';
import Header from './components/Header';
import GroceryListContainer from './containers/GroceryListContainer';
import ShoppingListContainer from './containers/ShoppingListContainer';
import StatsContainer from './containers/StatsContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <GroceryListContainer />
          <ShoppingListContainer />
          <StatsContainer />
        </div>
      </div>
    );
  }
}

export default App;
