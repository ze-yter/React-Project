import CardItem from "../components/CardItem";
import { Link } from "react-router-dom";

export default function FavoritesPage({ items, onAddToFavorite, onChangeInCart }) {

    return (
        <div className="content">
            {
                items.length === 0
                    ?
                    <div className="favorites-empty">
                        <img width={100} height={100} src="/images/favorite-empty.svg" alt="" />
                        <h2>Закладок нет :с</h2>
                        <p>Вам ничего не нравится?</p>

                        <Link to="/">
                            <button className="confirm-button bordered">
                                <img src="/images/arrow.svg" alt="Arrow" className="reverse-arrow" />
                                <span>Вернуться назад</span>
                            </button>
                        </Link>
                    </div>
                    :
                    <div>
                        <div className="title-block">
                            <h1 className="title">Любимое</h1>
                        </div>

                        <div className="products">
                            {items
                                .map(item => {
                                    return <CardItem
                                        key={item.id}
                                        item={item}
                                        onFavorite={obj => onAddToFavorite(obj)}
                                        onAddCart={obj => onChangeInCart(obj)}
                                    />
                                })
                            }
                        </div>
                    </div>
            }
        </div>
    );
}