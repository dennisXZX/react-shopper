import React from 'react'

const ShoppingList = (props) => {

  const renderShoppingList = () => {
    if (props.shoppingList.length > 0) {
      return (
        <ul className="list-group">
          {props.shoppingList.map(item => {
            return (
              <li
                key={item.id}
                onClick={() => props.removeShoppingItemById(item.id)}
                className="list-group-item">
                <span>{item.name}</span>
                <span className="label label-info">$ {item.cost}</span>
                <span className="label label-warning">{item.calories} kcal</span>
                <span className="label label-primary">{item.weight} mg</span>
              </li>
            )
          })}
        </ul>
      )
    } else {
      return (
        <ul className="list-group">
          <li className="list-group-item">
            Please add some items to the shopping list
          </li>
        </ul>
      )
    }
  }

  return (
    <div className="col-md-4 shopping-bg">
      <h2 className="text-center" style={{ marginBottom: '25px' }}>Shopping List</h2>
      {renderShoppingList()}
    </div>
  )
}

export default ShoppingList
