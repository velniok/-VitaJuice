import variantIcon01 from '../../assets/delivery/variant-icon-01.svg'
import variantIcon02 from '../../assets/delivery/variant-icon-02.svg'
import variantIcon03 from '../../assets/delivery/variant-icon-03.svg'
import methodIcon01 from '../../assets/delivery/method-icon-01.svg'
import methodIcon02 from '../../assets/delivery/method-icon-02.svg'

export default function DeliveryBottom() {
  return (
    <div className="delivery__bottom">
        <div className="delivery__variant">
            <h3 className="delivery__variant-title">ВАРИАНТЫ ОПЛАТЫ</h3>
            <ul className="delivery__variant-list">
                <li className="delivery__variant-item">
                    <img src={variantIcon01} alt="Наличными" className="delivery__variant-icon" />
                    <h4 className="delivery__variant-sub">НАЛИЧНЫМИ</h4>
                    <p className="delivery__variant-desc">Оплата наличными курьеру или при получении заказа</p>
                </li>
                <li className="delivery__variant-item">
                    <img src={variantIcon02} alt="Картой" className="delivery__variant-icon" />
                    <h4 className="delivery__variant-sub">КАРТОЙ</h4>
                    <p className="delivery__variant-desc">Оплата банковской картой курьеру при получение заказа</p>
                </li>
                <li className="delivery__variant-item">
                    <img src={variantIcon03} alt="Онлайн-оплата" className="delivery__variant-icon" />
                    <h4 className="delivery__variant-sub">ОНЛАЙН-ОПЛАТА</h4>
                    <p className="delivery__variant-desc">Безопасная и удобная оплата заказ на сайте.</p>
                </li>
            </ul>
        </div>
        <div className="delivery__method">
            <h3 className="delivery__method-title">СПОСОБЫ ДОСТАВКИ</h3>
            <ul className="delivery__method-list">
                <li className="delivery__method-item">
                    <img src={methodIcon01} alt="Курьером" className="delivery__method-icon" />
                    <h4 className="delivery__method-sub">КУРЬЕРОМ</h4>
                    <p className="delivery__method-desc">Вы оплачиваете только заказ, доставка — бесплатно</p>
                </li>
                <li className="delivery__method-item">
                    <img src={methodIcon02} alt="Самовывоз" className="delivery__method-icon" />
                    <h4 className="delivery__method-sub">САМОВЫВОЗ</h4>
                    <p className="delivery__method-desc">Можете сами забрать заказ, указав это при оформлении заказа.</p>
                </li>
            </ul>
        </div>
    </div>
  )
}
