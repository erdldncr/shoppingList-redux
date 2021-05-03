import React from 'react'
import '../App.css';
import Cart from './Cart';
import FormContainer from './FormContainer';
import ShoppingList from './ShoppingList';


function App() {
  return <div >
          <h1 className='text-center' > Shopping Cart</h1>
          <FormContainer/>
          <ShoppingList/>
          <Cart/>
      </div>
}

export default App;
