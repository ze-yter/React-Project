import SearchBlock from "../components/SearchBlock"
import { useState } from "react";
import CardItem from "../components/CardItem";

export default function MainPage(props) {
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className="content">
            <nav className="flex-padding">
                <ul>
                    <li><a href=""><h1 className="change-text">Популярное</h1></a></li>
                    <li><a href=""><h1 className="change-text">Редкое</h1></a></li>
                    <li><a href=""><h1 className="change-text">Дорогое</h1></a></li>
                    <li><a href=""><h1 className="change-text">Скидки</h1></a></li>
                </ul>
            </nav>
            <div className="title-block">
                <SearchBlock
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </div>
            <div className="products">
                {props.items
                    .filter(item => new RegExp(searchValue, 'i').test(item.name))
                    .map(item => {
                        return <CardItem
                            key={item.id}
                            item={item}
                            onFavorite={obj => props.onAddToFavorite(obj)}
                            onAddCart={obj => props.onChangeInCart(obj)}
                        />
                    })
                }
            </div>
        </div>
    );
}