import React from 'react';
import './Cars.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPhone   } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
const Cars = (props) => {

    const {name, img, model,madeIn, price, HP} = props.car;
    const icon = <FontAwesomeIcon icon={faShoppingCart}/>
    const facebook = <FontAwesomeIcon icon={faFacebookSquare}/>
    const twitter = <FontAwesomeIcon icon={faTwitterSquare}/>
    const insta = <FontAwesomeIcon icon ={faInstagramSquare}/>
    const phone = <FontAwesomeIcon icon={faPhone}/>


    return (
        <div className="car">
            <div className="car-card">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="info">
                    <h6>name: {name}</h6>
                    <h6>model: {model}</h6>
                    <h6>Horse-Power: {HP}</h6>
                    <p>Made in: {madeIn}</p>
                    <p>Price: ${price}</p>
                    <button onClick= {()=>props.handleAddToCart(props.car)} className="btn">{icon} ADD TO CART</button>
                   <p className="social"> <a href="/phone"> {phone}</a>
                   <a href="/facebook"> {facebook}</a>
                    <a href="/twitter"> {twitter}</a>
                    <a href="/insta"> {insta}</a></p>
                </div>
            </div>
        </div>
    );
};

export default Cars;