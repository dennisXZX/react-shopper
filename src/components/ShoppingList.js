import React from 'react'

const ShoppingList = (props) => {
  return (
    <div className="col-md-4">
      <h2 className="text-center">Shopping List</h2>
      <ul className="list-group">
        {props.shoppingList.map(item => {
          return (
            <li
              key={item.id}
              className="list-group-item">
              <span>{item.name}</span>
              <span className="label label-info">$ {item.cost}</span>
              <span className="label label-warning">{item.calories} kcal</span>
              <span className="label label-primary">{item.weight} mg</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ShoppingList
