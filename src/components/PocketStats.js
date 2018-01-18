import React from 'react'

const PocketStats = (props) => {

  const labelStyle = props.pocketMoney >= 0 ? "label label-success" : "label label-danger";

  return (
    <div className="col-md-12 text-center">
      <h2 style={{ margin: '20px 0' }}>
        You have <span className={labelStyle}>$ {props.pocketMoney}</span> to spend on grocery today!
      <button
        className="coupon"
        onClick={props.useCoupon}>
        Use Coupon
      </button>
      </h2>
    </div>
  )
}

export default PocketStats
