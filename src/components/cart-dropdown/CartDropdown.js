import React from 'react'
import './CartDropdown.scss'
import SubmitButton from '../submit-button/SubmitButton'

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <SubmitButton>GO TO CHECKOUT</SubmitButton>
    </div>
)

export default CartDropdown