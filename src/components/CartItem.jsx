import React from 'react'

function CartItem(props) {
    return (
        <div className="cartItem">
            <img className={'cartItem-image'} classwidth={70} height={70} src="images/clothes/shirt.jpg" alt="Shirt" />
            <div>
                <p>Рубашка SUFFERINGS - TORCH</p>
                <b>4 449 руб.</b>
            </div>
            <img className="cartItem-buttton" src="images/removeButton.svg" alt="Remove" />
        </div>
    );
}

export default CartItem;