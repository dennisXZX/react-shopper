import React from 'react'

const Stats = (props) => {
  return (
    <div className="col-md-4 stats-bg">
      <h2 className="text-center" style={{ marginBottom: '25px' }}>Shopping Stats</h2>
      <div className="alert alert-success" role="alert">
        <strong>Cost</strong> - $ {props.totalCost}
      </div>
      <div className="alert alert-info" role="alert">
        <strong>Calories</strong> - {props.totalCalories} Kcal
      </div>
      <div className="alert alert-warning" role="alert">
        <strong>Weight</strong> - {props.totalWeight} mg
      </div>
    </div>
  )
}

export default Stats
