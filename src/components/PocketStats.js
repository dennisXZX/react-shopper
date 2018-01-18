import React from 'react'

const PocketStats = (props) => {
  return (
    <h2 className="text-center" style={{ margin: '20px 0' }}>
      You have <span className="label label-success">$ {props.pocketMoney}</span> to spend on grocery today!
    </h2>
  )
}

export default PocketStats
