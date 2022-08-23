import React from 'react'

export default function Cities(props, {key}) {
  const handleCityClick = () => props.setCity(props.value);
  return (
          <li key={key} onClick={handleCityClick} className='city__link'>{props.title}</li>
        )
}
