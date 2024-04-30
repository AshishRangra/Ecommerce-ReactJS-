import React from 'react'
import Hero from '../Components/Hero/Hero'
import PopularMen from '../Components/Popular/PopularMen'
import PopularWomen from '../Components/Popular/PopularWomen'
import PopularKids from '../Components/Popular/PopularKids'
import Offers from '../Components/Offers/Offers'
import TrendingItems from '../Components/TrendingItems/TrendingItems'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import NewCollections from '../Components/NewCollections/NewCollections'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <PopularMen/>
      <PopularWomen/>
      <PopularKids/>
      <Offers/>
      <TrendingItems/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
