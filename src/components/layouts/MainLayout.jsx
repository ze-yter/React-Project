import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../HeaderItem";
import Drawer from "../Drawer";

export default function MainLayout(props) {
    const [cartOpened, setCartOpened] = useState(false);

    return (
        <div className="wrapper">
            {cartOpened && <Drawer onClose={() => setCartOpened(false)} onDelete={props.onChangeInCart} items={props.items.filter(e => e.inCart === true)} />}
            <Header onCartClick={() => setCartOpened(true)} />
            <Outlet/>
        </div>
    );
}