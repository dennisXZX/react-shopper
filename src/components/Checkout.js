import React from 'react'

const Checkout = (props) => {

  const buttonStyle = props.pocketMoney >= 0 ? "able" : "disabled";

  return (
    <div className="col-md-12 text-center checkout">
      <button className={buttonStyle}>Checkout</button>
    </div>
  )
}

export default Checkout;
