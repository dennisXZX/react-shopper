import React, { Component } from 'react'
import GroceryList from '../components/GroceryList';
import { connect } from 'react-redux';
import { addGroceryById, addPocketMoneyById } from '../actions';

class GroceryContainer extends Component {
  render() {
    return (
      <GroceryList
        groceryItemList={this.props.groceryItemList}
        addPocketMoneyById={this.props.addPocketMoneyById}
        addGroceryById={this.props.addGroceryById} />
    )
  }
}

function mapStateToProps(state) {
  return {
    groceryItemList: state.grocery.groceryItemList
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addGroceryById: (id) => dispatch(addGroceryById(id)),
    addPocketMoneyById: (id) => dispatch(addPocketMoneyById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryContainer);
