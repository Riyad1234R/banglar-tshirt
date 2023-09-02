import React from 'react';
import Tshirt from '../Tshirt/Tshirt';

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length ===0){
        message=<p>please add some products</p>
    }
    else{
        message=<div>
            
            <p><small>thanks for giving money</small></p>
        </div>
    }
    return (
        <div>
            <h2>Order summry:{cart.length}</h2>
            {cart.length >2?<span>Aro kino</span>:<span>borolox</span>}
            {message}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}>
                        {tshirt.name}<button onClick={()=>handleRemoveFromCart(tshirt._id)}
                        >X</button> </p>)
            }
            {
                Cart.length===2&&<p>double bonnanja!!!</p>
            }
            {
                cart.length ===3 || <h3>tinta tw holo</h3>
            }
        </div>
    );
};

export default Cart;