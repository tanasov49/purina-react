
import PopupAddress from './PopupAddress';
import React, { useState, useMemo } from 'react';
import DbcCodes from './DbcCodes';
import AddressFilter from './AddressFilter';
export default function Main(props) {
    const [isOpenAddress, setAddressPopupOpen] = useState(false)
    const handleOpenAddress = () => {
      setAddressPopupOpen(true);
    }
  
    function closePopup (event) {
      if (event.target.classList.contains('popup') || event.target.classList.contains('address-clients__close-btn')) {
        setAddressPopupOpen(false);
        
      }
    }
    const [selectedCard, setIsSelectedCard] = useState({});
    const handleCardClick = (card) => {
        setIsSelectedCard(card);
        setAddressPopupOpen(false);
      }
    const [value, setValue] = useState('');
    const filterAddress = props.cards.filter(card => {
      return card['Address'].toLowerCase().includes(value.toLowerCase())
    })
    return (
        <main className="main">
        <section className="info">
            <h1 className="info__title">Добро пожаловать на сайт</h1>
            <p className="info__subtitle">Выберите ниже нужный вам адрес</p>
        </section>
        <section className="address-clients">
            <button className="address-clients__btn" onClick={handleOpenAddress} type='button'>Список адресов</button>
            <h2 className="address-clients__title">Ниже приведены позиции с нулевым значением</h2>
            <div className={isOpenAddress ? 'popup popup_opened' : 'popup'} onClick={closePopup}>
            <button className="address-clients__close-btn" type='button' onClick={closePopup}></button>
            <ul className="address">
            <input
              type='text'
              className='address__filter' 
              placeholder='Введите адрес или наименование'
              onChange={(e) => setValue(e.target.value)}
            />
            {filterAddress.map((card, key) => 
              <PopupAddress 
              card={card}
              key={key}
              onCardClick={handleCardClick}
              />
            )}
        </ul>
        </div>
        <DbcCodes 
        card={selectedCard}
        />
        </section>
        </main>
    );
}