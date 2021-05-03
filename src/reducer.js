import { v4 as uuid } from 'uuid';

export function reducer (state,action){

    
    if(action.type==='INCREASE'){
        const {id,operation}=action.payload
        if(operation==='quantity'){
            
            return {...state,shoppingList:state.shoppingList.map(item=>item.id===id?{...item,quantity:item.quantity+1}:item)}
        }
        if(operation==='rating'){
            
            return {...state,shoppingList:state.shoppingList.map(item=>item.id===id?{...item,rating:item.rating+1}:item)}
        }
        
        
    }
    if(action.type==='DECREASE'){
        
        const {id,operation}=action.payload
        if(operation==='quantity'){
            
            return {...state,shoppingList:state.shoppingList.map(item=>item.id===id?{...item,quantity:item.quantity>0?item.quantity-1:item.quantity}:item)}
        }
        if(operation==='rating'){
            
            return {...state,shoppingList:state.shoppingList.map(item=>item.id===id?{...item,rating:item.rating>0?item.rating-1:item.rating}:item)}
        }
    }
    if(action.type==='ADD_ITEM'){
        const id=uuid()
       
        const{name}=action.payload
        return {...state,shoppingList:[...state.shoppingList,{name,quantity:0,rating:0,id,dismiss:false}]}
    }
    if(action.type==='TOGGLE_BUTTON'){
            console.log(action.payload)
        return {...state,shoppingList:state.shoppingList.map(item=>item.id===action.payload?{...item,dismiss:!item.dismiss}:item)}
    }
    return state
}