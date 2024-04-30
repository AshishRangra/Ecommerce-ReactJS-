import React from 'react'
import './TrendingItems.css'
import trending_items from '../Assets/new_collections'
import Item from '../Items/Item'

const TrendingItems = () => {
  return (
    <div className='new-collections'>
      <h1>TRENDING ITEMS</h1>
      <hr />
      <div className="collections">
        {
          trending_items.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })
        }
      </div>
    </div>
  )
}

export default TrendingItems
