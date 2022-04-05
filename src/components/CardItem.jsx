import React, { useState } from 'react'

function CardItem({ name, price, imgSrc, onAddCart, onFavorite }) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const onClickPlus = () => {
        onAddCart({ name, price, imgSrc });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({ name, price, imgSrc });
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="card">
            <div className='favorite button' onClick={onClickFavorite}>
                <img width={32} height={32} className='' src={isFavorite ? "images/liked.svg" : "images/unliked.svg"} alt="Favorite" />
            </div>
            <div className='card__img'>
                <img width={133} height={112} src={imgSrc} alt="" />
            </div>
            <h5>{name}</h5>
            <div className="flex-objects alignment">
                <div className="flex-objects column-flex">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img
                    className='button'
                    width={32} height={32}
                    onClick={onClickPlus}
                    src={isAdded ? "/images/addButton-checked.svg" : "/images/addButton-unchecked.svg"} alt="AddButton" />
            </div>
        </div>
    );
}

export default CardItem;