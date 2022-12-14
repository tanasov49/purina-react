// получение товаров по ключу и проверка его на нулевое значение, затем вывод на страницу, исходя из нажатия на выбранный адрес
import React from "react";
export default function DbcCodes({card}) {
    return (
        <ul className="dbc-codes">
            <li className="dbc-list"><p className="dbc-list__text">{card ? card["Address"]:''}</p></li>
            {Object.keys(card).map((dbc, key) => {
                if (card[dbc] === "0") {
                    return (
                        <li className="dbc-list" key={key}><p className="dbc-list__text">{card ? dbc:''}</p></li>
                    )
                }
                return null;
            })}
        </ul>
    )
}