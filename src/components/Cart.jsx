export default function Cart({ cart, clearCart }) {
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
            <h2>Cart:</h2>
            <div className="container">
                {cartItems}
                {!showItems && <div className="nothing">The basket is empty</div>}
            </div>
            {showItems && (
                <div>
                    <button>Place an order</button>
                    <button onClick={clearCart}>Clear Cart</button>
                </div>
            )}
        </section>
    );
}
