import React, { Component } from 'react';
import Header from './components/Header';
import GroceryListContainer from './containers/GroceryListContainer';
import ShoppingListContainer from './containers/ShoppingListContainer';
import ShoppingStatsContainer from './containers/ShoppingStatsContainer';
import PocketStatsContainer from './containers/PocketStatsContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <PocketStatsContainer />
        </div>
        <div className="row">
          <GroceryListContainer />
          <ShoppingListContainer />
          <ShoppingStatsContainer />
        </div>
      </div>
    );
  }
}

export default App;
