import React, { Component } from 'react'
import ShoppingList from '../components/ShoppingList';
import { connect } from 'react-redux';
import { removeShoppingItemById, removePocketMoneyById } from '../actions';

class ShoppingListContainer extends Component {
  render() {
    // sort the shopping list
    const sortedShoppingList = this.props.shoppingList.sort((a, b) => {
      return a.name > b.name;
    })

    return (
      <ShoppingList
        shoppingList={sortedShoppingList}
        removePocketMoneyById={this.props.removePocketMoneyById}
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
    removeShoppingItemById: (id) => dispatch(removeShoppingItemById(id)),
    removePocketMoneyById: (id) => dispatch(removePocketMoneyById(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListContainer);
