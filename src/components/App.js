import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import React from 'react';
import '../index.css';
import api from './Api';
import DbcCodes from './DbcCodes';

function App() {
  const [isOpenAddress, setAddressPopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const handleOpenAddress = () => {
    setAddressPopupOpen(true);
  }
  const [selectedCard, setIsSelectedCard] = React.useState({});
  const handleCardClick = (card) => {
      setIsSelectedCard(card)
    }
  function closePopup (event) {
    if (event.target.classList.contains('popup') || event.target.classList.contains('address-clients__close-btn')) {
      setAddressPopupOpen(false);
      setIsSelectedCard({});
    }
  }
  Promise.all([
    api.getAddress(),
  ]).then(([cards]) => {
    setCards(cards);
  }).catch(err => {
    console.log(`Error: ${err}`);
  })
  
  return (
    <div className='page'>
      <Header></Header>
      <Main onOpenAddress={handleOpenAddress}
       cards={cards} 
       isOpen={isOpenAddress} 
       onClose={closePopup} 
       onCardClick={handleCardClick}
      />
      <DbcCodes 
        card={selectedCard}
        cards={cards} 
      />
      <Footer></Footer>
    </div>
  );
}

export default App;
