import React from 'react'
// Инпут для поиска адреса
export default function AddressFilter(props) {
  const setValue = (e) => props.setValue(e.target.value);
  return (
    <input
    type='text'
    className='address__filter' 
    placeholder='Введите адрес или наименование'
    onChange={setValue}
    />
  )
}
