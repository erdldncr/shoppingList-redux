import React from 'react'
import {connect} from 'react-redux'
 function Cart({cart}) {
       
     return (<React.Fragment>
         <div class="alert alert-primary text-center" role="alert">
                Shopping Cart
        </div>
         <ul className="list-group text-center">
             {cart.map(item => <li className="list-group-item">
                 <span>{item.quantity}kg</span>
                 {item.name}
                 <span>({item.rating})</span>
             </li>)}


         </ul>

     </React.Fragment>
    )
}
const mapStateToProps=({shoppingList})=>{
        
    return {cart:shoppingList.filter(item=>item.quantity>0&&item.dismiss===false).sort((a,b)=>a.rating-b.rating)}
}
export default connect(mapStateToProps)(Cart)