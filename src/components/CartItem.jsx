import React from 'react';

function CartItem({ item, onDelete }) {
    return (
        <div className="cartItem">
            <img className={'cartItem-image'} width={70} height={70} src={item.imgSrc} alt="Shirt" />
            <div>
                <p>{item.name}</p>
                <b>{item.price} руб.</b>
            </div>
            <img onClick={() => onDelete(item)} className="cartItem-buttton" src="images/removeButton.svg" alt="Remove" />
        </div>
    );
}

export default CartItem;