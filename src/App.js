import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
        <div className="post">
          <div className="post-header">
            <img
                src="https://sun9-20.userapi.com/impg/IEUEbVVS3BC1N9JdE0DS-zbP-UPERpkcR3B_LA/jtmEcNAXS_E.jpg?size=1077x1078&quality=95&sign=351443d63a5ef5ea9517907185815b38&type=album" // Здесь можно использовать URL к вашей аватарке
                alt="User Avatar"
                className="user-avatar"
            />
            <div className="user-info">
              <h2>Алевтина Шаталова (Щербакова)</h2>
              <p>Posted on September 14, 2023</p>
            </div>
          </div>
          <div className="post-content">
            <p>Сегодня я немножко переусердствовала со своим желанием - добавить в жизнь новизны)). Пришла к студентам в универ, а оказывается занятия у нас в другом корпусе, который на другом конце Москвы... Несмотря на то, что был час пик моё путешествие закончилось благополучно, но #новизны пожалуй на эту недельку хватит.

              А как вы справляетесь с непредвиденными обстоятельствами?</p>
            <img
                src="https://sun9-76.userapi.com/impg/YsFQF0P7wtgym05PDP8p7dLScEnOu1JFtAzIDg/__hAXMvl6wc.jpg?size=1327x1658&quality=95&sign=93e6d6b535c03cf55e911911989905fa&type=album "
                alt="Post"
            />
          </div>
          <div className="post-actions">
            <button className="like-button">Like</button>
            <button className="comment-button">Comment</button>
            <button className="share-button">Share</button>
          </div>
        </div>
      </div>
  );
}

export default App;
