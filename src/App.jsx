import { useEffect, useState } from "react";
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import MainPage from "./pages/MainPage";
import FavoritesPage from "./pages/FavoritesPage"
import ProfilePage from "./pages/ProfilePage"
import RequireAuth from './hoc/RequireAuth'
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useDispatch } from "react-redux";
import { setUser } from "./store/slices/userSlice";

const storageName = 'userData';
function App() {

  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:3001/clothes`)
      .then(res => {
        setItems(res.data);
      })
    const user = JSON.parse(localStorage.getItem(storageName));
    console.log(user)
    if (user) {
      dispatch(setUser({
        email: user.email,
        id: user.id,
        token: user.token
      }))
    }
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
    <Routes>
      <Route path="/" element={
        <RequireAuth>
          <MainLayout items={items} onChangeInCart={onChangeInCart} />
        </RequireAuth>
      }>
        <Route index element={<MainPage items={items} onChangeInCart={onChangeInCart} onAddToFavorite={onAddToFavorite} />} />
        <Route path="favorites" element={<FavoritesPage
          items={items.filter(e => e.favorite === true)}
          onChangeInCart={onChangeInCart}
          onAddToFavorite={onAddToFavorite} />}
        />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
