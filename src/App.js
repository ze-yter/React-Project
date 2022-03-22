function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="logo-border">
          <img width={40} height={40} src="/images/logo.png" className="company-logo"/>
          <div>
            <h3>BUBBLESTORE</h3>
            <p className="low-opacity">Лучшая одежда только здесь</p>
          </div>
        </div>
        <ul className="flex-objects">
          <li className="cart">
            <img width={18} height={18} src="/images/cart.svg" />
            <span>7895 руб.</span>
            </li>
          <li>
            <img width={18} height={18} src="/images/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1 className="title">Самые популярные</h1>
        
          <div className="flex-objects">
          <div className="card">
            <img width={133} height={112} src="/images/clothes/1.jpg" alt="" />
            <h5>Куртка VANS MN TORREY BLACK-WHITE</h5>
            <div className="flex-objects alignment">
              <div className="flex-objects column-flex">
                <span>Цена:</span>
                <b>6 949 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/addButton.svg" alt="AddButton" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/images/clothes/2.jpg" alt="" />
            <h5>Куртка THE NORTH FACE Y 1996 RETRO</h5>
            <div className="flex-objects alignment">
              <div className="flex-objects column-flex">
                <span>Цена:</span>
                <b>10 799 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/addButton.svg" alt="AddButton" />
              </button>
            </div>
          </div><div className="card">
            <img width={133} height={112} src="/images/clothes/3.jpg" alt="" />
            <h5>Кроссовки PUMA RS-X Фиолетовые</h5>
            <div className="flex-objects alignment">
              <div className="flex-objects column-flex">
                <span>Цена:</span>
                <b>5 456 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/addButton.svg" alt="AddButton" />
              </button>
            </div>
          </div><div className="card">
            <img width={133} height={112} src="/images/clothes/4.jpg" alt="" />
            <h5>Бомбер ADIDAS NEO BLACK</h5>
            <div className="flex-objects alignment">
              <div className="flex-objects column-flex">
                <span>Цена:</span>
                <b>4 769 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/addButton.svg" alt="AddButton" />
              </button>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;
