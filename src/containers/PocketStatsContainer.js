import React, { Component } from 'react';
import PocketStats from '../components/PocketStats';
import { connect } from 'react-redux';
import { useCoupon } from '../actions/index';

class PocketStatsContainer extends Component {
  render() {
    return (
      <PocketStats
        pocketMoney={this.props.pocketMoney}
        useCoupon={this.props.useCoupon} />
    )
  }
}

function mapStateToProps(state) {
  return {
    pocketMoney: state.pocket.pocketMoney
  }
}

function mapDispatchToProps(dispatch) {
  return {
    useCoupon: () => dispatch(useCoupon())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PocketStatsContainer);
