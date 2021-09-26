import React, { useEffect, useState } from 'react';
import Cars from '../cars/Cars';
import Cart from '../cart/Cart';
import './Showroom.css'

const Showroom = () => {
    const [cars, setCars]= useState([]);
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setCars(data))
    },[]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = car => {
        const newCart =[...cart, car];
        setCart(newCart);
    }

    return (
        <div className="showroom-body">
            <div className="section">
                <div className="cars-container">
                    {
                        cars.map(car => <Cars
                            key={car.id}
                            car={car}
                            handleAddToCart={handleAddToCart}
                        ></Cars>)
                    }
                </div>
                <div className="cart-body">
                    <h1>cart</h1>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Showroom;