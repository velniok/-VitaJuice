import React from 'react'

export default function HeroBtn({ active, id, getActiveSlider }) {
  return (
    <div className={`hero__slider-btn--circle ${active ? 'active' : ''}`} onClick={() => getActiveSlider(id)}></div>
  )
}
