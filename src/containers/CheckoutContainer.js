import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout';

class CheckoutContainer extends Component {
  render() {
    return (
      <Checkout
        pocketMoney={this.props.pocketMoney} />
    )
  }
}

function mapStateToProps(state) {
  return {
    pocketMoney: state.pocket.pocketMoney
  }
}


export default connect(mapStateToProps)(CheckoutContainer);
