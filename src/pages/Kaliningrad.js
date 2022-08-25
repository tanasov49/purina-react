import React, {useState} from 'react'
import AddressFilter from '../components/AddressFilter';
import PopupAddress from '../components/PopupAddress';
import DbcCodes from '../components/DbcCodes';
export default function Kaliningrad(props) {
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
    const filterAddress = props.cardsKaliningrad.filter(card => {
      return card['Address'].toLowerCase().includes(value.toLowerCase())
    })
  return (

<section className="address-clients">
    <button className="address-clients__btn" onClick={handleOpenAddress} type='button'>Список адресов</button>
    <h2 className="address-clients__title">Ниже приведены позиции с нулевым значением</h2>
    <div className={isOpenAddress ? 'popup popup_opened' : 'popup'} onClick={closePopup}>
    <button className="address-clients__close-btn" type='button' onClick={closePopup}></button>
    <ul className="address">
    <AddressFilter 
    setValue={setValue}
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
  )
}
