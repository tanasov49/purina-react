//Клик по адресу, который выведет его соседние ключи
import React from "react";
export default function PopupAddress(props, {key}) {
    const handleCardClick = () => props.onCardClick(props.card);
    return (
            <li key={key} className="address__option" onClick={handleCardClick}>{props.card['Address']}</li>
    )
}