import React from 'react';
import './CartComponet.css'
const CartComponet = (props) => {
    const { name, img } = props.cartCompo;

    return (
        <div className="compo">
            <img src={img} alt="" />
            <h6>{name}</h6>
        </div>
    );
};

export default CartComponet;