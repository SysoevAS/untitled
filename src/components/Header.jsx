export default function Header({ handleClick }) {
    return (
        <header>
            <div className="container">
                <div className="logo" onClick={() => handleClick('goods')}>KikaShop</div>
                <nav>
                    <div className="nav-item" onClick={() => handleClick('goods')}>All products</div>
                    <div className="nav-item" onClick={() => handleClick('cart')}>
                        <img src="https://martinkls.ru/image/cache/catalog/img_304821-50x50.png" alt="Cart" />
                    </div>
                </nav>
            </div>
        </header>
    );
}
