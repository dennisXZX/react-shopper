import React from 'react'

const PocketStats = (props) => {

  const labelStyle = props.pocketMoney >= 0 ? "label label-success" : "label label-danger";

  return (
    <h2 className="text-center" style={{ margin: '20px 0' }}>
      You have <span className={labelStyle}>$ {props.pocketMoney}</span> to spend on grocery today!
    </h2>
  )
}

export default PocketStats
