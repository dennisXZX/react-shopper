import React, { Component } from 'react';
import GroceryListContainer from './containers/GroceryListContainer';
import ShoppingListContainer from './containers/ShoppingListContainer';
import Stats from './components/Stats';

class App extends Component {
  render() {
    return (
      <div>
        <GroceryListContainer />
        <ShoppingListContainer />
        <Stats />
      </div>
    );
  }
}

export default App;
