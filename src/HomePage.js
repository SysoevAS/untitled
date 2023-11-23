import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Ваш заголовок</h1>
            </header>
            <main className={styles.main}>
                {/* Ваш контент здесь */}
            </main>
            <footer className={styles.footer}>
                {/* Ваш подвал здесь */}
            </footer>
        </div>
    );
};

export default HomePage;
