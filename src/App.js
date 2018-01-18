import React, { Component } from 'react';
import GroceryListContainer from './containers/GroceryListContainer';
import ShoppingListContainer from './containers/ShoppingListContainer';
import StatsContainer from './containers/StatsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <GroceryListContainer />
        <ShoppingListContainer />
        <StatsContainer />
      </div>
    );
  }
}

export default App;
