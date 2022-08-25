// Ссылки на роуты страницы
import React from 'react'
import { Link } from 'react-router-dom';
export default function Links() {
  return (
    <div className='cities'>
        <Link className='cities__link' to='/kaliningrad'>Калининград</Link>
        <Link className='cities__link' to='/vologda'>Вологда</Link>
        <Link className='cities__link' to='/murmansk'>Мурманск</Link>
        <Link className='cities__link' to='/tver'>Тверь</Link>
    </div>
  )
}
