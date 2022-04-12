import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <div className="logo-border">
        <Link to="/">
          <img width={60} height={60} src="/images/logo.png" alt="Logo" className="company-logo button" />
        </Link>
        <div>
          <h1>BUBBLESTORE</h1>
          <p className="low-opacity">Лучшая одежда только здесь</p>
        </div>
      </div>
      <ul className="flex-objects">
        <li>
          <Link to="favorites">
            <img className="button" width={25} height={25} src="/images/favoriteIcon.svg" alt="Favorites" />
          </Link>
        </li>
        <li className="cart">
          <img className="button" onClick={props.onCartClick} width={25} height={25} src="/images/cart.svg" alt="Cart" />
          <span>7895 руб.</span>
        </li>
        <li>
          <img className="user-logo" width={80} height={80} src="/images/user.jpeg" alt="Profile" />
        </li>
      </ul>
    </header>
  );
}

export default Header;