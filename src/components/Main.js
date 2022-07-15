import React from 'react';
export default function Main(props) {

    return (
        <main className="main">
        <section className="info">
            <h1 className="info__title">Добро пожаловать на сайт</h1>
            <p className="info__subtitle">Выберите ниже нужный вам адрес</p>
        </section>
        <section className="address-clients">
            <button className="address-clients__btn" onClick={props.onOpenAddress} type='button'>Список адресов</button>
            <h2 className="address-clients__title">Ниже приведены позиции с нулевым значением</h2>
        </section>
    </main>
    );
}