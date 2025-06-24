import productImg from '../../assets/products/products-img.png'
import ProductsItem from './ProductsItem'

export default function Products() {

    const productNav = [
        {
            id: 1,
            title: 'СОКИ',
            img: './img/products/products-nav-01.png'
        },
                {
            id: 2,
            title: 'МИКСЫ',
            img: './img/products/products-nav-02.png'
        },
                {
            id: 3,
            title: 'СМУЗИ',
            img: './img/products/products-nav-03.png'
        },
                {
            id: 4,
            title: 'ДЕТОКСЫ',
            img: './img//products/products-nav-04.png'
        },
                {
            id: 5,
            title: 'ЛАССИ',
            img: './img/products/products-nav-05.png'
        },
                {
            id: 6,
            title: 'БОУЛЫ',
            img: './img/products/products-nav-06.png'
        },
                {
            id: 7,
            title: 'САЛАТЫ',
            img: './img/products/products-nav-07.png'
        },
                {
            id: 8,
            title: 'ЗДОРОВАЯ ЕДА',
            img: './img/products/products-nav-08.png'
        },
    ]

  return (
    <section className="products">
        <h1 className="products-title title">НАША ПРОДУКЦИЯ</h1>
        <div className="products-wrapper">
            <div className="container">
                <div className="products-inner">
                    <img src={productImg} alt="" className="products-img" />
                    <nav className="products__nav">
                        <ul className="products__nav-list">
                            {
                                productNav.map(obj => (
                                    <ProductsItem item={obj} key={obj.id} />
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
  )
}