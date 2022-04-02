import CardItem from "./components/CardItem";
import Header from "./components/HeaderItem";
import Drawer from "./components/CartDrawer";
import { useEffect, useState } from "react";
import SearchBlock from "./components/SearchBlock";
import axios from 'axios';

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://62460a29e3450d61b0fa28c9.mockapi.io/clothes')
      .then(res => {
        setItems(res.data);
      })
  }, [])

  const onAddToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClickClose={() => setCartOpened(false)} items={cartItems} />}
      <Header onCartClick={() => setCartOpened(true)} />
      <div className="content">
        <div className="title-block">
          <h1 className="title">Товары</h1>
          <SearchBlock
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="products">
          {items
            .filter(item => new RegExp(searchValue, 'i').test(item.name))
            .map(item => {
              return <CardItem
                key={item.name}
                item={item}
                onFavorite={() => console.log('Добавили в закладки')}
                onAddCart={(obj) => onAddToCart(obj)}
              />
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
