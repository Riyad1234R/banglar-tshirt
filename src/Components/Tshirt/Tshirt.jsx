import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleToCart}) => {
    const{picture,name,price,}=tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price:${price}</p>
            <button onClick={()=>handleToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;