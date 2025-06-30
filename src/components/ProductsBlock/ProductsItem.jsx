import React from 'react'
import { Link } from 'react-router'

export default function ProductsItem({ item, edit }) {
  return (
    <li className="products__nav-item">
      <Link to={`/-VitaJuice/category/${item.categoryName}`}>
        <img src={item.img} alt={item.title} className="products__nav-img" />
        <h3 className={`products__nav-title ${edit ? 'edit' : ''}`}>{item.title}</h3>
      </Link>
    </li>
  )
}
