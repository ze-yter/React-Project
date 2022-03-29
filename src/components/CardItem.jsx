import React from 'react'

function CardItem(props) {
    return (
        <div className="card">
            <div className='favorite'>
                <img width={32} height={32} className='' src="images/unliked.svg" alt="Favorite" />
            </div>
            <div className='card__img'>
                <img width={133} height={112} src={props.imgSrc} alt="" />
            </div>
            <h5>{props.name}</h5>
            <div className="flex-objects alignment">
                <div className="flex-objects column-flex">
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>
                <img className='button' width={32} height={32} src="/images/addButton-unchecked.svg" alt="AddButton" />
            </div>
        </div>
    );
}

export default CardItem;