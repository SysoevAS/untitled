import { useState } from 'react';
import Header from './components/Header';
import Goods from './components/Goods';
import Cart from './components/Cart';
import Item from './components/Item';
import './App.css';

export default function App() {
    const [currentPage, setCurrentPage] = useState('goods');
    const [currentGood, setCurrentGood] = useState('');
    const [cart, setCart] = useState([]);

    function switchPage(page, good = '') {
        setCurrentPage(page);
        setCurrentGood(good);
    }

    function addToCart(item) {
        setCart((currentCart) => ([...currentCart, item]));
    }

    return (
        <>
            <Header handleClick={switchPage} />
            {currentPage === 'goods' && <Goods handleClick={switchPage} />}
            {currentPage === 'cart' && <Cart cart={cart} />}
            {currentPage === 'item' && <Item good={currentGood} addToCart={addToCart}/>}
        </>
    );
}