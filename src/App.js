import CardItem from "./components/CardItem";
import Header from "./components/HeaderItem";
import Drawer from "./components/CartDrawer";

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

  const cards = clothes.map(item => {
    return <CardItem
      key={item.name}
      name={item.name}
      price={item.price}
      imgSrc={item.imgSrc}
    />
  });

  return (
    <div className="wrapper">
      <Drawer />
      <Header />
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
