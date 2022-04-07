import CardItem from "./components/CardItem";
import Header from "./components/HeaderItem";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import SearchBlock from "./components/SearchBlock";
import axios from 'axios';

function App() {

  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/clothes`)
      .then(res => {
        setItems(res.data);
      })
  }, [])

  const onChangeInCart = (item) => {
    axios.patch(`http://localhost:3001/clothes/${item.id}`, { inCart: !item.inCart });

    const changedItems = items.map(e => {
      if (e.id === item.id)
        return {
          ...item,
          inCart: !item.inCart
        }
      return e;
    });

    setItems(changedItems);
  };

  const onAddToFavorite = (item) => {
    axios.patch(`http://localhost:3001/clothes/${item.id}`, { favorite: !item.favorite });

    const changedItems = items.map(e => {
      if (e.id === item.id)
        return {
          ...item,
          favorite: !item.favorite
        }
      return e;
    });

    setItems(changedItems);
  };

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} onDelete={onChangeInCart} items={items.filter(e => e.inCart == true)} />}
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
                item={item}
                onFavorite={obj => onAddToFavorite(obj)}
                onAddCart={obj => onChangeInCart(obj)}
              />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
