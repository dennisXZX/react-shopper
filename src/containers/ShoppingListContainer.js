import React, { Component } from 'react'
import ShoppingList from '../components/ShoppingList';
import { connect } from 'react-redux';

class ShoppingListContainer extends Component {
  render() {
    return (
      <ShoppingList
        shoppingList={this.props.shoppingList} />
    )
  }
}

function mapStateToProps(state) {
  return {
    shoppingList: state.grocery.shoppingList
  }
}


export default connect(mapStateToProps)(ShoppingListContainer);
