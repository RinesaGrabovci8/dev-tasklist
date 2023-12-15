import React from 'react'
import { useState } from 'react'
import Card from '../../Component/Card/Card'
import Header from '../../Component/Header/Header'
import './page.css'
import botox from '../../assets/botox.png'
import dermalfillers from '../../assets/dermalfillers.jpeg'
import secretrf from '../../assets/secretrf.jpg'
import harmonyca from '../../assets/harmonyca.jpg'
import profhilo from '../../assets/profhilo.jpg'
import facials from '../../assets/facials.jpg'
import sclerotherapy from '../../assets/sclerotherapy.jpg'
import led from '../../assets/led.jpg'
import fatdissolve from '../../assets/fatdissolve.jpg'
import growthfactors from '../../assets/growthfactors.jpg'
import specialpackage from '../../assets/specialpackage.jpg'
import consulation from '../../assets/consultation.jpg'

const Page = ({ handleCardClick }) => {

  const [clickedCard, setClickedCard] = useState(false);

  return (
    <div className='page'>
      <div className='card-container'>
      <Card
      image={botox}
      title="Anti Wrinkle Treatment"
      link='/botox'
      onClick={() => {
        handleCardClick();
      }}
      />
      <Card
      image={dermalfillers}
      title="Dermal Fillers"
      link='/dermalfillers'
      onClick={() => {
        handleCardClick();
      }}
      />
      <Card
      image={secretrf}
      title="Secret RF"
      link='/secretrf'
      onClick={() => {
        handleCardClick();
      }}
      />
      <Card
      image={harmonyca}
      title="HArmonyCA"
      link='/harmonyca'
      onClick={() => {
        handleCardClick();
      }}
      />
      <Card
      image={profhilo}
      title="Profhilo"
      link='/profhilo'
      onClick={() => {
        handleCardClick();
      }}
      />
      <Card
      image={facials}
      title="Facials"
      link='/facials'
      onClick={() => {
        handleCardClick();
      }}
      />
      <Card
      image={sclerotherapy}
      title="Sclerotherapy"
      link='/sclerotherapy'
      onClick={() => {
        handleCardClick();
      }}
      />
      <Card
      image={led}
      title="LED"
      link='/led'
      onClick={() => {
        handleCardClick();
      }}
      />
      <Card
      image={fatdissolve}
      title="Fat Dissolve"
      link='/fatdissolve'
      onClick={() => {
        handleCardClick();
      }}
      />
      <Card
      image={growthfactors}
      title="Growth Factors"
      link='/growthfactors'
      onClick={() => {
        handleCardClick();
      }}
      />
      <Card
      image={specialpackage}
      title="Special Package for Time Clinic"
      link='/specialpackage'
      onClick={() => {
        handleCardClick();
      }}
      />
      <Card
      image={consulation}
      title="Consulation"
      link='/consulation'
      onClick={() => {
        handleCardClick();
      }}
      />
      </div>
    </div>
  )
}

export default Page