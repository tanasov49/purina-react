import React, {useState} from 'react';
import { Api } from './Api';
import RoutesPage from './RoutesPage';
export default function Main() {
  const [cardsKaliningrad, setCardsKaliningrad] = useState([]);
  const [cardsVologda, setCardsVologda] = useState([])
  const [cardsMurmansk, setCardsMurmansk] = useState([])
  const [cardsTver, setCardsTver] = useState([])
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