import React, { Component } from 'react'
import Stats from '../components/Stats';
import { connect } from 'react-redux';

class StatsContainer extends Component {
  render() {
    const { totalCost, totalCalories, totalWeight } = this.props;

    return (
      <Stats
        totalCost={totalCost}
        totalCalories={totalCalories}
        totalWeight={totalWeight} />
    )
  }
}

function mapStateToProps(state) {
  return {
    totalCost: state.shopping.totalCost,
    totalCalories: state.shopping.totalCalories,
    totalWeight: state.shopping.totalWeight
  }
}


export default connect(mapStateToProps)(StatsContainer);
