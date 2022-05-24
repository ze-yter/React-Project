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
import { getDatabase, ref, child, get, set } from "firebase/database";

function App() {
  const dbRef = ref(getDatabase());

  const storageName = 'userData';

  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    get(child(dbRef, `clothes`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setItems(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

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

  

  const user = JSON.parse(localStorage.getItem(storageName));
  console.log(user);


  const onChangeInCart = (item) => {
    const db = getDatabase();
    set(ref(db, `clothes/${item.id - 1}`), {
      ...item,
      inCart: !item.inCart
    });

    setItems(prev => prev.map(e => {
      if (e.id === item.id)
        return {
          ...item,
          inCart: !item.inCart
        }
      return e;
    }));
  };

  const onAddToFavorite = (item) => {
    const db = getDatabase();
    set(ref(db, `clothes/${item.id - 1}`), {
      ...item,
      favorite: !item.favorite
    });

    setItems(prev => prev.map(e => {
      if (e.id === item.id)
        return {
          ...item,
          favorite: !item.favorite
        }
      return e;
    }));
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
