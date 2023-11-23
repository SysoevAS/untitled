import React from 'react';

const menuItems = [
    {
        name: 'Омлет с беконом',
        price: 250,
        ingredients: ['яйца', 'бекон', 'молоко', 'соль', 'перец'],
        description: 'Омлет из двух яиц с беконом, подается с соусом тартар.',
    },
    {
        name: 'Яичница с шампиньонами',
        price: 200,
        ingredients: ['яйца', 'шампиньоны', 'молоко', 'соль', 'перец'],
        description: 'Яичница из двух яиц с шампиньонами, подается с зеленью.',
    },
    {
        name: 'Блинчики с творогом и сметаной',
        price: 150,
        ingredients: ['блины', 'творог', 'сметана', 'сахар'],
        description: 'Блинчики с нежным творожным кремом и сметаной.',
    },
];

function Menu() {
    return (
        <div className="Menu">
            <h2>Меню</h2>
            <ul className="menu-list">
                {menuItems.map((item) => (
                    <li key={item.name}>
                        <h3>{item.name}</h3>
                        <p>Цена: {item.price} рублей</p>
                        <p>Ингредиенты: {item.ingredients.join(', ')}</p>
                        <p>Описание: {item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
