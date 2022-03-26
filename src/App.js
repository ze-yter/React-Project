import CardItem from "./components/CardItem";
import HeaderItem from "./components/HeaderItem";
import CartItem from "./components/CartItem";

function App() {

  const clothes = [
    {
      name: 'Куртка VANS MN TORREY BLACK',
      price: '6 949 руб.',
      imgSrc: '/images/clothes/1.jpg',
      favorite: true,
      inCart: false
    },
    {
      name: 'Куртка THE NORTH FACE Y 1996 RETRO',
      price: '10 799 руб.',
      imgSrc: '/images/clothes/2.jpg',
      favorite: false,
      inCart: true
    },
    {
      name: 'Кроссовки PUMA RS-X Фиолетовые',
      price: '5 456 руб.',
      imgSrc: '/images/clothes/3.jpg',
      favorite: false,
      inCart: false
    },
    {
      name: 'Бомбер ADIDAS NEO BLACK',
      price: '4 769 руб.',
      imgSrc: '/images/clothes/4.jpg',
      favorite: false,
      inCart: false
    }
  ];

  const cards = [];
  clothes.forEach(item => {
    cards.push(<CardItem
      key={item.name}
      name={item.name}
      price={item.price}
      imgSrc={item.imgSrc}
    />)
  })

  return (
    <div className="wrapper">

      <div style={{display: 'none'}}className="overlay">
        <div className="drawer">
          <h3 className="cart-title">Корзина</h3>

          <div className="cartList">
            <CartItem />
            <CartItem />
          </div>

          <div className="total-block">
            <span>Итого:</span>
            <div></div>
            <b>9 905 руб.</b>
          </div>

          <button className="confirm-button">
            <span>Оформить заказ</span>
            <img src="/images/arrow.svg" alt="Arrow" />
          </button>

        </div>
      </div>

      <HeaderItem />
      <div className="content">
        <div className="title-block">
          <h1 className="title">Самые популярные</h1>
          <div className="search-block">
            <img width={30} height={30} src="/images/search.svg" alt="Search" />
            <input className="search-item" type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="flex-objects">
          {cards}
        </div>
      </div>
    </div>
  );
}

export default App;
