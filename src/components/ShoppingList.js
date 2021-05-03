import React from 'react'
import Item from './Item'
import {connect} from 'react-redux'
function ShoppingList({shoppingList}) {
  
    return (
        <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col" colSpan='2'>Rating</th>
          
          </tr>
        </thead>
        <tbody>
            {shoppingList.map((item,index)=><Item key={item.id}{...item} index={index}/>)}
    
        </tbody>
      </table>
    )
}
const mapStateToProps=({shoppingList})=>{

  return {shoppingList}
}
export default connect(mapStateToProps)(ShoppingList)