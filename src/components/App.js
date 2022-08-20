import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import React, {useState} from 'react';
import '../index.css';
import { Api } from './Api.js';
import GetSheets from './GetSheets';
function App() {
  const api = new Api (
    'Vladimir'
  )
  Promise.all([
    api.getSheets(),
  ]).then(([cards]) => {
      setCards(cards[0]['data']);
  }).catch(err => {
    console.log(`Error: ${err}`);
  })


  const [cards, setCards] = useState([]);

  // Promise.all([
  //   api.getAddress(),
  // ]).then(([cards]) => {
  //   setCards(cards);
  // }).catch(err => {
  //   console.log(`Error: ${err}`);
  // })
  
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
