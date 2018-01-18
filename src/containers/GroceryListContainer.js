import React, { Component } from 'react'
import GroceryList from '../components/GroceryList';
import { connect } from 'react-redux';
import { addGroceryById } from '../actions';

class GroceryContainer extends Component {
  render() {
    return (
      <GroceryList
        groceryItemList={this.props.groceryItemList}
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
    addGroceryById: (id) => dispatch(addGroceryById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryContainer);
