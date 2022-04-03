import CartItem from "./CartItem";

export default function Drawer({onDelete,  onClose, items = [] }) {

    return (
        <div className="overlay">
            <div className="drawer">
                <div className="title-block">
                    <h3 className="cart-title">Корзина</h3>
                    <img onClick={onClose} src="images/removeButton.svg" alt="Close" />
                </div>

                <div className="cartList">
                    {items.map((item) => {
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
                    <b>9 905 руб.</b>
                </div>

                <button className="confirm-button">
                    <span>Оформить заказ</span>
                    <img src="/images/arrow.svg" alt="Arrow" />
                </button>

            </div>
        </div>
    );
}