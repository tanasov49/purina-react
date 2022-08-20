import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import React, {useState} from 'react';
import '../index.css';
import api from './Api';
import GetSheets from './GetSheets';
function App() {

  const [cards, setCards] = useState([]);

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
      <Main 
       cards={cards} 
      />
      <Footer></Footer>
      <GetSheets></GetSheets>
    </div>
  );
}



export default App;
