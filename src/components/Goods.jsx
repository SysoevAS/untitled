import goods from '../goods.js';

export default function Goods({handleClick}) {
  return (
    <section className="goods">
      {goods.map((good) => (
        <div key={good.id} className="card" onClick={() => handleClick('item', good)}>
          <div
            className="photo"
            style={{ backgroundImage: `url(${good.photo})` }}
          >
          </div>
          <div className="name">{good.name}</div>
          <div className="price">{good.price} ₽</div>
        </div>
      ))}
    </section>
  );
}
