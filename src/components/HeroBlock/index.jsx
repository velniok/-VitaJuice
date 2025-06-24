import { useState } from "react";
import HeroItem from "./HeroItem";
import HeroBtn from "./HeroBtn";


export default function Hero() {
  const sliderItems = [
      {
          id: 0,
          title: 'sliderTitle',
          price: 'sliderPrice',
      },
            {
          id: 1,
          title: 'sliderTitle',
          price: 'sliderPrice',
      },
            {
          id: 2,
          title: 'sliderTitle',
          price: 'sliderPrice',
      },
  ]

  const [activeSlider, setActiveSlider] = useState(0)

  const getActiveSlider = (id) => {
    setActiveSlider(prev => prev = id)
  }

  return (
    <section className="hero">
        <div className="hero__slider-wrapper">
            <div className="hero__slider">
                <ul className="hero__slider-list">
                    {
                        sliderItems.map(obj => {
                          let pos = activeSlider * 100
                          return <HeroItem pos={pos} key={obj.id} />
                        })
                    }
                </ul>
            </div>
        </div>
        <div className="hero__slider-btn">
            <button className={`hero__slider-btn--prev ${activeSlider === 0 ? 'disable' : ''}`} onClick={() => {
                if (activeSlider !== 0) {
                    setActiveSlider(prev => prev - 1)
                }
            }}>
                <svg width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.2725 0.469276C19.9863 -0.244507 21.1283 -0.101749 21.8421 0.612034C22.4131 1.32582 22.4131 2.46787 21.6994 3.18165L5.1396 17.4573L21.6994 31.8757C22.4131 32.4467 22.4131 33.5888 21.8421 34.4453C21.1283 35.1591 19.9863 35.1591 19.2725 34.5881L1.14242 18.8849C0.285882 18.1711 0.285882 16.8863 1.14242 16.1725L19.2725 0.469276Z" fill="white" />
                </svg>
            </button>
            {
              sliderItems.map(obj => {
                let active = false
                if (obj.id === activeSlider) {
                  active = true
                }
                return <HeroBtn active={active} getActiveSlider={getActiveSlider} id={obj.id} key={obj.id} />
              })
            }
            <button className={`hero__slider-btn--next ${activeSlider === sliderItems.length - 1 ? 'disable' : ''}`} onClick={() => {
              if (activeSlider < sliderItems.length - 1) {
                setActiveSlider(prev => prev + 1)
              }
            }}>
                <svg width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.7275 0.469276C3.01372 -0.244507 1.87167 -0.101749 1.15788 0.612034C0.586859 1.32582 0.586859 2.46787 1.30064 3.18165L17.8604 17.4573L1.30064 31.8757C0.586861 32.4467 0.586861 33.5888 1.15789 34.4453C1.87167 35.1591 3.01372 35.1591 3.7275 34.5881L21.8576 18.8849C22.7141 18.1711 22.7141 16.8863 21.8576 16.1725L3.7275 0.469276Z" fill="white" />
                </svg>
            </button>
        </div>
    </section>
  )
}
