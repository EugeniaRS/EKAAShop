import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Image from 'react-bootstrap/esm/Image'
import { Link } from 'react-router-dom'

const WishItem = ({ w }) => {
  return (
<>
<Link to={`/product_detail/${w.id}`} className="wish_item_container">
    <section className="wish_product_image_section">
      <Image src={w.image} alt={w.name} className="wish_image"/>
    </section>
    <section>
      <h6>{w.name}</h6>
      <span className="product_delivery">{w.price}</span>
    </section>
  </Link>
  <section className="wish_btns_container">
    <Button href="/" className="delete_product_btn">
      Delete
    </Button>
  </section>
</>
  )
}

export default WishItem