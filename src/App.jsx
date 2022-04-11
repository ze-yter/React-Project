import { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import MainPage from "./pages/MainPage";
import FavoritesPage from "./pages/FavoritesPage"

function App() {

  const [items, setItems] = useState([]);

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout items={items} onChangeInCart={onChangeInCart} />}>
          <Route index element={<MainPage items={items} onChangeInCart={onChangeInCart} onAddToFavorite={onAddToFavorite} />} />
          <Route path="favorites" element={<FavoritesPage
            items={items.filter(e => e.favorite === true)}
            onChangeInCart={onChangeInCart}
            onAddToFavorite={onAddToFavorite} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
