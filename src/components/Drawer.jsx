import CartItem from "./CartItem";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, child, get, set, push } from "firebase/database";

export default function Drawer({ onDelete, onClose, items }) {
    const [products, setProducts] = useState(items);
    const [summary, setSummary] = useState(0);

    useEffect(() => {
        products.map((product) => {
            setSummary(prev => prev + product.price)
        })
    }, [])


    const createOrder = () => {
        const storageName = 'userData';
        const uid = JSON.parse(localStorage.getItem(storageName)).id;
        const postListRef = ref(getDatabase(), 'orders');
        const newPostRef = push(postListRef);
        set(newPostRef, {
            products,
            summary,
            uid
        })
        const db = getDatabase();
        products.map((item) => {
            set(ref(db, `clothes/${item.id - 1}`), {
                ...item,
                inCart: !item.inCart
            });
        })
        setProducts([]);
        

    };

    return (
        <div className="overlay">
            {products.length !== 0
                ?
                <div className="drawer">
                    <div className="title-block">
                        <h3 className="cart-title">Корзина</h3>
                        <img onClick={onClose} src="images/removeButton.svg" alt="Close" />
                    </div>

                    <div className="cartList">
                        {products.map((item) => {
                            return <CartItem
                                key={item.id}
                                item={item}
                                onDelete={onDelete}
                            />
                        })}
                    </div>

                    <div className="total-block">
                        <span>Итого:</span>
                        <div></div>
                        <b>{summary} руб.</b>
                    </div>

                    <button className="confirm-button" onClick={() => createOrder({
                        products,
                        summary
                    })}>
                        <span>Оформить заказ</span>
                        <img src="/images/arrow.svg" alt="Arrow" className="standard-arrow" />
                    </button>

                </div>
                :
                <div className="drawer">
                    <div className="title-block">
                        <h3 className="cart-title">Корзина</h3>
                        <img onClick={onClose} src="images/removeButton.svg" alt="Close" />
                    </div>

                    <div className="cart-empty">
                        <img src="/images/cart-empty.svg" alt="Empty Sukka" width={140} height={140} />
                        <h3 className="cart-empty__title">Пусто</h3>
                        <span className="cart-empty__subtitle">Необходимо добавить хотя бы один товар, что бы совершить оплату.</span>
                    </div>

                    <button onClick={onClose} className="confirm-button">
                        <span>Вернуться к товарам</span>
                    </button>
                </div>
            }
        </div>
    );
}