import { useState } from 'react';
import Header from './pickle/Header';
import Tovari from './pickle/tovari';
import Korzina from './pickle/korzina';
import Product from './pickle/product';
import './App.css';

export default function App() {
    //хуки для отслеживания тек страницы, тектовара и содер корзины
    const [currentPage, setCurrentPage] = useState('goods');
    const [currentGood, setCurrentGood] = useState('');
    const [korzina, setkorzina] = useState([]);
//быстро обновляем товар, плюс следим за товаром
    function switchPage(page, good = '') {
        setCurrentPage(page);
        setCurrentGood(good);
    }
//функ, чтобы закинуть товар в корзину
    function addTokorzina(item) {
        setkorzina((currentkorzina) => ([...currentkorzina, item]));
    }


    return (
        <>
            <Header handleClick={switchPage} />
            {currentPage === 'goods' && <Tovari handleClick={switchPage} />}
            {currentPage === 'korzina' && <Korzina korzina={korzina} />}
            {currentPage === 'item' && <Product good={currentGood} addTokorzina={addTokorzina}/>}
        </>
    );
}
