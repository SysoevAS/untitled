export default function Header({ handleClick }) {
  return (
    <header>
      <div className="container">
        <div className="logo" onClick={() => handleClick('goods')}>Магазин</div>
        <nav>
          <div className="nav-item" onClick={() => handleClick('goods')}>Товары</div>
          <div className="nav-item" onClick={() => handleClick('cart')}>Корзина</div>
        </nav>
      </div>
    </header>
  );
}
