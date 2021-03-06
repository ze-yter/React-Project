import React from 'react'

function CardItem({ item, onAddCart, onFavorite }) {

    const onClickPlus = () => {
        onAddCart(item);
    };

    const onClickFavorite = () => {
        onFavorite(item);
    };

    return (
        <div className="card">
            <div className='favorite button' onClick={onClickFavorite}>
                <img width={32} height={32} className='' src={item.favorite ? "images/liked.svg" : "images/unliked.svg"} alt="Favorite" />
            </div>
            <div className='card__img'>
                <img width={133} height={112} src={item.imgSrc} alt="" />
            </div>
            <h5>{item.name}</h5>
            <div className="flex-objects alignment">
                <div className="flex-objects column-flex">
                    <span>Цена:</span>
                    <b>{item.price} руб.</b>
                </div>
                <img
                    className='button'
                    width={32} height={32}
                    onClick={onClickPlus}
                    src={item.inCart ? "/images/addButton-checked.svg" : "/images/addButton-unchecked.svg"} alt="AddButton" />
            </div>
        </div>
    );
}

export default CardItem;