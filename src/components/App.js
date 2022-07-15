import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import React from 'react';
import '../index.css';
import DbcCodes from './DbcCodes';
import PopupAddress from './PopupAddress';

function App() {
  const [isOpenAddress, setAddressPopupOpen] = React.useState(false);
  const handleOpenAddress = () => {
    setAddressPopupOpen(true);
  }
  function closePopup (event) {
    if (event.target.classList.contains('popup') || event.target.classList.contains('address-clients__close-btn')) {
      setAddressPopupOpen(false);
    }
  }


  
  return (
    <div className='page'>
      <Header></Header>
      <Main
      onOpenAddress={handleOpenAddress}
      />
      <DbcCodes></DbcCodes>
      <Footer></Footer>
      <PopupAddress isOpen={isOpenAddress} onClose={closePopup}></PopupAddress>
    </div>
  );
}

export default App;
