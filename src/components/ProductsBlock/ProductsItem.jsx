import React from 'react'

export default function ProductsItem({ item, edit }) {
  return (
    <li className="products__nav-item">
        <img src={item.img} alt={item.title} className="products__nav-img" />
        <h3 className={`products__nav-title ${edit ? 'edit' : ''}`}>{item.title}</h3>
    </li>
  )
}
