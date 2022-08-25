// В данном блоке я получаю данные из листов, а затем скидываю их в просы в роуты
import React, {useState} from 'react';
import { Api } from './Api';
import RoutesPage from './RoutesPage';
export default function Main() {
  // Получение данных из листов гугл таблиц
  const apiKaliningrad = new Api (
    'Kaliningrad'
  )
  const apiVologda = new Api (
    'Vologda'
  )
  const apiMurmansk = new Api (
    'Murmansk'
  )
  const apiTver = new Api (
    'Tver'
  )
    // Хуки для получение данных из таблиц
    const [cardsKaliningrad, setCardsKaliningrad] = useState([]);
    const [cardsVologda, setCardsVologda] = useState([])
    const [cardsMurmansk, setCardsMurmansk] = useState([])
    const [cardsTver, setCardsTver] = useState([])
    //Промисы для рендера данных
  Promise.all([
    apiKaliningrad.getSheets(),
    apiVologda.getSheets(),
    apiMurmansk.getSheets(),
    apiTver.getSheets()
  ]).then(([cardsKaliningrad, cardsVologda, cardsMurmansk, cardsTver]) => {
    setCardsKaliningrad(cardsKaliningrad[0]['data']);
    setCardsVologda(cardsVologda[0]['data'])
    setCardsMurmansk(cardsMurmansk[0]['data'])
    setCardsTver(cardsTver[0]['data'])
  }).catch(err => {
    console.log(`Error: ${err}`);
  })
    // Блок main в него передаем данные из таблицы в роуты
    return (
        <main className="main">
                <section className="info">
                  <h1 className="info__title">Добро пожаловать на сайт</h1>
                </section>
                <RoutesPage 
                  cardsKaliningrad={cardsKaliningrad}
                  cardsVologda={cardsVologda}
                  cardsMurmansk={cardsMurmansk}
                  cardsTver={cardsTver}
                />
        </main>
    );
}