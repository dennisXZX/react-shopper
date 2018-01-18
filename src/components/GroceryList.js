import React from 'react'

const GroceryList = (props) => {

  const renderGroceryList = () => {
    if (props.groceryItemList.length > 0) {
      return (
        <ul className="list-group">
          {props.groceryItemList.map((item) => {
            return (
              <li
                key={item.id}
                className="list-group-item"
                onClick={() => {
                  props.addGroceryById(item.id);
                  props.addPocketMoneyById(item.id);
                }}>
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
            No more items for sale
          </li>
        </ul>
      )
    }
  }

  return (
    <div className="col-md-4 grocery-bg">
      <h2 className="text-center" style={{ marginBottom: '25px' }}>Grocery List</h2>
      {renderGroceryList()}
    </div>
  )
}

export default GroceryList
