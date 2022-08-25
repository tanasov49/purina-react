import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Kaliningrad from '../pages/Kaliningrad'
import Vologda from '../pages/Vologda'
import Murmansk from '../pages/Murmansk'
import Home from '../pages/Home'
import Tver from '../pages/Tver'
export default function RoutesPage(props) {
  return (
    <Routes>
      <Route 
      path='/'
      element={<Home />}
      />
      <Route
      path='/kaliningrad'
      element={<Kaliningrad cardsKaliningrad={props.cardsKaliningrad} />}
      />
      <Route
      path='/vologda'
      element={<Vologda cardsVologda={props.cardsVologda} />}
      />
      <Route
      path='/murmansk'
      element={<Murmansk cardsMurmansk={props.cardsMurmansk} />}
      />
      <Route
      path='/tver'
      element={<Tver cardsTver={props.cardsTver} />}
      />
    </Routes>
  )
}
