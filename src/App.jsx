import CardItem from "./components/CardItem";
import Header from "./components/HeaderItem";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import SearchBlock from "./components/SearchBlock";
import axios from 'axios';

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://62460a29e3450d61b0fa28c9.mockapi.io/clothes')
      .then(res => {
        setItems(res.data);
      })

    axios.get('https://62460a29e3450d61b0fa28c9.mockapi.io/cart')
      .then(res => {
        setCartItems(res.data);
      })
  }, [])

  const onAddToCart = (item) => {
    axios.post('https://62460a29e3450d61b0fa28c9.mockapi.io/cart', item);
    setCartItems(prev => [...prev, item]);
  };

  const onDeleteCartItem = (id) => {
    axios.delete(`https://62460a29e3450d61b0fa28c9.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = (item) => {
    axios.post('https://62460a29e3450d61b0fa28c9.mockapi.io/favorites', item);
    setFavorites(prev => [...prev, item]);
  };

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} onDelete={onDeleteCartItem} items={cartItems} />}
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
                key={item.id}
                name={item.name}
                price={item.price}
                imgSrc={item.imgSrc}
                onFavorite={obj => onAddToFavorite(obj)}
                onAddCart={obj => onAddToCart(obj)}
              />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
