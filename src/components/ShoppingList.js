import React, { Component } from 'react'

class ShoppingBag extends Component {
  render() {
    return (
      <div className="col-md-4">
        <h2 className="text-center">Shopping List</h2>
        <ul className="list-group">
          <li className="list-group-item">1</li>
          <li className="list-group-item">2</li>
          <li className="list-group-item">3</li>
          <li className="list-group-item">4</li>
        </ul>
      </div>
    )
  }
}

export default ShoppingBag;