export default function Cart({ cart }) {
  let cartItems = cart.map((item) => (
    <div key={item.id} className="card">
      <div
        className="photo"
        style={{ backgroundImage: `url(${item.photo})` }}
      ></div>
      <div className="name-and-price">
        <div className="name">{item.name}</div>
        <div className="price">{item.price} ₽</div>
      </div>
    </div>
  ));

  let showItems = cartItems.length > 0;

  return (
    <section className="cart">
      <h2>Корзина</h2>
      <div className="container">
        {cartItems}
        {!showItems && <div className="nothing">В корзине ничего нет :(</div>}
      </div>
      {showItems && <button>Оформить заказ</button>}
    </section>
  );
}
