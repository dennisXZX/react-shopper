import React, { Component } from 'react';
import PocketStats from '../components/PocketStats';
import { connect } from 'react-redux';

class PocketStatsContainer extends Component {
  render() {
    return (
      <PocketStats
        pocketMoney={this.props.pocketMoney} />
    )
  }
}

function mapStateToProps(state) {
  return {
    pocketMoney: state.pocket.pocketMoney
  }
}


export default connect(mapStateToProps)(PocketStatsContainer);
