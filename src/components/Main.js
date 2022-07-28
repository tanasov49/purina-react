
import PopupAddress from './PopupAddress';
import React from 'react';
// import DbcCodes from './DbcCodes';
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
            <div className={props.isOpen ? 'popup popup_opened' : 'popup'} onClick={props.onClose}>
            <button className="address-clients__close-btn" type='button' onClick={props.onClose}></button>
            <ul className="address">
            {props.cards.map((card, key) => <PopupAddress
            key={key}
            card={card}
            onCardClick={props.onCardClick}
            />)}
        </ul>
        </div>
        {/* <ul className="dbc-codes">
            {props.cards.map((items, key) => {
                return (
                    <li className="dbc-list" key={key}>
                        {Object.keys(items).map((dbc, key) => {
                            if (items[dbc] === "0") {
                                return (
                                    <p className="dbc-list__text" key={key}>{dbc}</p>
                                        )
                        }
                        return null
                        })}
                    </li>
                        )
            })}
        </ul> */}
        </section>
        </main>
    );
}