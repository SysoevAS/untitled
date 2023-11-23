import { useState } from 'react';
import Header from './pickle/Header';
import Tovari from './pickle/tovari';
import Korzina from './pickle/korzina';
import Product from './pickle/product';
import './App.css';

export default function App() {
    const [currentPage, setCurrentPage] = useState('goods');
    const [currentGood, setCurrentGood] = useState('');
    const [korzina, setkorzina] = useState([]);

    function switchPage(page, good = '') {
        setCurrentPage(page);
        setCurrentGood(good);
    }

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
