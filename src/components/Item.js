import React from 'react'
import {connect} from 'react-redux'
function Item({id,name,quantity,rating,increase,decrease,index,toggle,dismiss}) {

    return (
        <tr>
        <th scope="row">{index+1}</th>
        <td>{name}</td>
        <td><span onClick={()=>decrease(id,'quantity')}  >-</span>{quantity}<span onClick={()=>increase(id,'quantity')} >+</span></td>
        <td><span onClick={()=>decrease(id,'rating')} >-</span>{rating} <span onClick={()=>increase(id,'rating')} >+</span></td>
        <td><button onClick={()=>{toggle(id)}} className='btn btn-primary' >{dismiss?'Accept':'Dismiss'}</button></td>
      </tr>
    )
}

const mapDispatchToProps=(dispatch)=>{

  return {
    increase:(id,operation)=>{dispatch({type:'INCREASE',payload:{id,operation}})},
    decrease:(id,operation)=>{dispatch({type:'DECREASE',payload:{id,operation}})},
    toggle:(id)=>{dispatch({type:'TOGGLE_BUTTON',payload:id})}
  
  }
}
export default connect(null,mapDispatchToProps)(Item)