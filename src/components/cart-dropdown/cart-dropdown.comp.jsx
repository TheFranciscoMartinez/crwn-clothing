import React from "react";
import CustomButton from "../custom-button/custom-button.comp";
import CartItem from "../cart-item/cart-item.comp";
import { connect } from "react-redux";
import './cart-dropdown.style.scss';
import { selectCartItems } from "../../redux/cart/cart.selector";


const CartDropdown = ({cartItem}) => (
    <div className='cart-dropdown'>
        
        <div className='cart-items'>
        {cartItem.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>

        <CustomButton >GO TO CHECK OUT</CustomButton> 

    </div>
);

const mapStateToProps = state => ({ 
    cartItem: selectCartItems(state)
});


export default connect(mapStateToProps)(CartDropdown);