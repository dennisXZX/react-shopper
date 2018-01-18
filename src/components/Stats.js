import React from 'react'

const Stats = (props) => {
  return (
    <div className="col-md-4">
      <h2 className="text-center">Shopping Stats</h2>
      <ul className="list-group">
        <li className="list-group-item">Cost - $ {props.totalCost}</li>
        <li className="list-group-item">Calories - {props.totalCalories} Kcal</li>
        <li className="list-group-item">Weight - {props.totalWeight} mg</li>
      </ul>
    </div>
  )
}

export default Stats
