import React from 'react'

function CartItem(props) {
    return (
        <div className="cartItem">
            <img className={'cartItem-image'} width={70} height={70} src={props.imgSrc} alt="Shirt" />
            <div>
                <p>{props.name}</p>
                <b>{props.price} руб.</b>
            </div>
            <img className="cartItem-buttton" src="images/removeButton.svg" alt="Remove" />
        </div>
    );
}

export default CartItem;