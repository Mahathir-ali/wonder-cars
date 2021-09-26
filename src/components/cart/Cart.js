import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log();
    const{ cart } = props;
    let total = 0;
    let carName = "";
    for(const car of cart){
        total = total + parseInt(car.price);
        carName = carName + " ," + car.name;
    }
    return (
        <div className="cart">
            <h4>Cars Added : <span>{carName}</span>  </h4>
            <h4>Total Price : $<span >{total} </span></h4>
        </div>
    );
};

export default Cart;