import CartComponet from './cart-components/CartComponet';
import './Cart.css'
const Cart = (props) => {
    const{ cart } = props;
    let total = 0;
    for(const car of cart){
        total = total + parseInt(car.price);
    }
    return (
        <>
            <div className="cart">
                <h4>Total Price : $<span >{total} </span></h4>
            </div>
            <div className="component">
                {
                    cart.map(cartCompo => <CartComponet
                        key={cartCompo.key}
                        cartCompo={cartCompo}
                    
                    />)
                }
            </div>
        </>
    );
};

export default Cart;