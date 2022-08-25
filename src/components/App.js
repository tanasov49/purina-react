// Сюда импортирую все основные элементы страницы
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
// Импорт стилей
import '../index.css';
export default function App() {
  return (
    <div className='page'>
      <Header></Header>
      <Main 
      />
      <Footer></Footer>
    </div>
  );
}
