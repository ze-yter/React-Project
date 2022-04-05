
function Header(props) {
  return (
    <header>
      <div className="logo-border">
        <img width={60} height={60} src="/images/logo.png" alt="Logo" className="company-logo" />
        <div>
          <h1>BUBBLESTORE</h1>
          <p className="low-opacity">Лучшая одежда только здесь</p>
        </div>
      </div>
      <div className="flex-objects">
      <ul className="flex-objects">
        <li>
          <img className="button" width={25} height={25} src="/images/favoriteIcon.svg" alt="Profile" />
        </li>
        <li className="cart">
          <img className="button" onClick={props.onCartClick} width={25} height={25} src="/images/cart.svg" alt="Cart" />
          <span>7895 руб.</span>
        </li>
      </ul>
      <img className="user-logo" width={80} height={80} src="/images/user.jpeg" alt="Profile" />
      </div>
    </header>
  );
}

export default Header;