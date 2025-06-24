import sliderTitle from '../../assets/hero/hero-title.png'
import sliderPrice from '../../assets/hero/hero-price.png'

export default function HeroItem({ pos }) {
  return (
    <li className={`hero__slider-item`} style={{ transform: `translateX(-${pos}%)` }}>
        <div className="container">
            <div className="hero__slider-content">
                <img src={sliderTitle} alt="" className="hero__slider-title" />
                <img src={sliderPrice} alt="" className="hero__slider-price" />
            </div>
        </div>
    </li>
  )
}
