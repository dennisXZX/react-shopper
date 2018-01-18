import React, { Component } from 'react'
import ShoppingList from '../components/ShoppingList';
import { connect } from 'react-redux';
import { removeShoppingItemById } from '../actions';

class ShoppingListContainer extends Component {
  render() {
    return (
      <ShoppingList
        shoppingList={this.props.shoppingList}
        removeShoppingItemById={this.props.removeShoppingItemById} />
    )
  }
}

function mapStateToProps(state) {
  return {
    shoppingList: state.shopping.shoppingList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeShoppingItemById: (id) => dispatch(removeShoppingItemById(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListContainer);
