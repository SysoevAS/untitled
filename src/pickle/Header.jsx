import React from 'react';

export default function Header({ handleClick }) {
    return (
        <header>
            <div className="container">
                <div className="logo" onClick={() => handleClick('goods')}>KikaShop</div>
                <div className="social-icons">
                    <a href="#" className="social-icon">
                        <img src="https://www.tehnosecond.ru/assets/templates/images/telegram.png" alt="Social Icon 1" />
                    </a>
                </div>
                <nav>
                    <div className="nav-item" onClick={() => handleClick('goods')}>All products</div>
                    <div className="nav-item" onClick={() => handleClick('korzina')}>
                        <img src="https://martinkls.ru/image/cache/catalog/img_304821-50x50.png" alt="Korzina" />
                    </div>
                </nav>
            </div>
        </header>
    );
}
