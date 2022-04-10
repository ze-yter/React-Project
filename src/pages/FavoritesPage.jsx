import SearchBlock from "../components/SearchBlock"
import { useState } from "react";
import CardItem from "../components/CardItem";

export default function FavoritesPage(props) {
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className="content">
            <div className="title-block">
                <h1 className="title">Товары</h1>
                <SearchBlock
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </div>
            <div className="products">
                {props.items
                    .filter(e => e.favorite === true)
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