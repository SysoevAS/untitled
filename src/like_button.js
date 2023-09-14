import React from 'react';
import ReactDOM from 'react-dom';

// Компонент кнопки "Нравится" с данными и обработчиком события.
function LikeButton(props) {
    const [likes, setLikes] = React.useState(props.initialLikes);

    const incrementLikes = () => {
        setLikes(likes + 1);
    };

    return (
        <div>
            <p>Количество нравится: {likes}</p>
            <button onClick={incrementLikes}>Нравится</button>
        </div>
    );
}

// Создаем компоненты с разными данными.
const button1Data = {
    initialLikes: 0,
};

const button2Data = {
    initialLikes: 5,
};

const button3Data = {
    initialLikes: 10,
};

// Рендерим компоненты на странице, передавая им данные.
ReactDOM.render(<LikeButton {...button1Data} />, document.getElementById('button1_container'));
ReactDOM.render(<LikeButton {...button2Data} />, document.getElementById('button2_container'));
ReactDOM.render(<LikeButton {...button3Data} />, document.getElementById('button3_container'));
