import React,{useRef} from 'react'
import { Form } from 'react-bootstrap'
import {connect} from 'react-redux'
 function FormContainer({addItem}) {
    const nameRef=useRef('')
    const handleSubmit=()=>{
        addItem(nameRef.current.value)
        nameRef.current.value=''

    }
    return (
        <React.Fragment>
            <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                    ref={nameRef}
                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary mx-auto">Submit</button>
        </React.Fragment>
    )
}

const mapDispatchToProps=(dispatch)=>{
      
    return {
        addItem:(name)=>{dispatch({type:'ADD_ITEM',payload:{name}})}
    }
}
export default connect(null,mapDispatchToProps)(FormContainer)
