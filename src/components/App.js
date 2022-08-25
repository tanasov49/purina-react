import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import React, {useState} from 'react';
import '../index.css';
import { Api } from './Api.js';
function App() {
  const [cities] = useState([
    {title: 'Калининград', value: 'Kaliningrad'},
    {title: 'Мурманск', value: 'Murmansk'},
    {title: 'Тверь', value: 'Tver'},
    {title: 'Вологда', value: 'Vologda'}
  ]);


  return (
    <div className='page'>
      <Header></Header>
      <Main 
      />
      <Footer></Footer>
    </div>
  );
}



export default App;
