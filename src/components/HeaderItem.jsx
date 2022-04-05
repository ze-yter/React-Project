
function Header(props) {
  return (
    <header>
      <div className="logo-border">
        <img width={40} height={40} src="/images/logo.png" alt="Logo" className="company-logo" />
        <div>
          <h3>BUBBLESTORE</h3>
          <p className="low-opacity">Лучшая одежда только здесь</p>
        </div>
      </div>
      <ul className="flex-objects">
        <li className="cart">
          <img className="button" onClick={props.onCartClick} width={18} height={18} src="/images/cart.svg" alt="Cart" />
          <span>7895 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/images/favoriteIcon.svg" alt="Profile" />
        </li>
        <li>
          <img width={18} height={18} src="/images/user.svg" alt="Profile" />
        </li>
      </ul>
    </header>
  );
}

export default Header;