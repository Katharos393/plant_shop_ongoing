import React from 'react'
import Hero from '../Components/Hero/Hero'
import BestSellers from '../Components/BestSellers/BestSellers'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import Newsletter from '../Components/Newsletter/Newsletter'

const Plants = () => {
  return (
    <div>
        <Hero />
        <BestSellers />
        <Offers />
        <NewCollections />
        <Newsletter />
    </div>
  )
}

export default Plants