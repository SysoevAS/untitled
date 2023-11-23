export default function Korzina({ korzina, clearkorzina }) {
    let korzinaItems = korzina.map((item) => (
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

    let showItems = korzinaItems.length > 0;

    return (
        <section className="korzina">
            <h2>Cart:</h2>
            <div className="container">
                {korzinaItems}
                {!showItems && <div className="nothing">The basket is empty</div>}
            </div>
            {showItems && (
                <div>
                    <button>Place an order</button>
                    <button onClick={clearkorzina}>Clear korzina</button>
                </div>
            )}
        </section>
    );
}
