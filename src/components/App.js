import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import React, { useMemo, useState} from 'react';
import '../index.css';
import { Api } from './Api.js';
import useGoogleSheets from 'use-google-sheets';
function App() {



  const [cities, setCity] = useState([
    {title: 'Калининград', value: 'Kaliningrad'},
    {title: 'Мурманск', value: 'Murmansk'},
    {title: 'Тверь', value: 'Tver'},
    {title: 'Вологда', value: 'Vologda'}
  ]);

  const api = new Api (
      'Kaliningrad'
    )
    Promise.all([
      api.getSheets(),
    ]).then(([cards]) => {
        setCards(cards[0]['data']);
    }).catch(err => {
      console.log(`Error: ${err}`);
    })
    const handleCityClick = (value) => {
      setCity(value)
    }
  const [cards, setCards] = useState([]);
  return (
    <div className='page'>
      <Header></Header>
      <Main 
       cards={cards}
       cities={cities}
       value={cities.value}
       setCity={handleCityClick}
      />
      <Footer></Footer>
    </div>
  );
}



export default App;
