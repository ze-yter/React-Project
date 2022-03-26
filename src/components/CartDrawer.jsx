import CartItem from "./CartItem";

export default function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h3 className="cart-title">Корзина</h3>

                <div className="cartList">
                    <CartItem />
                    <CartItem />
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