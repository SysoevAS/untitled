import { useState } from 'react';

export default function Product({ good, addTokorzina }) {
  const [showFullText, setShowFullText] = useState(false);
  const [added, setAdded] = useState(false);

  function add() {
    addTokorzina(good);
    setAdded(true);
  }

  return (
    <section className="item">
      <div
        className="photo"
        style={{ backgroundImage: `url(${good.photo})` }}
      ></div>
      <div>
        <div className="name">{good.name}</div>
        <div className="price">{good.price} ₽</div>
        <div className="description" onClick={() => setShowFullText((currentValue) => !currentValue)}>{showFullText ? good.description : good.description.slice(0, 50) + '...>'}</div>
        <button onClick={add} style={{backgroundColor: added ? '#08a045' : 'rgb(61, 15, 170)'}}>{added ? 'Добавлено в корзину' : 'Добавить в корзину'}</button>
      </div>
    </section>
  );
}
