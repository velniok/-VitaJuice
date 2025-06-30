import productImg from '../../assets/products/products-img.png'
import ProductsItem from './ProductsItem'

export default function Products() {

    const productNav = [
        {
            id: 1,
            categoryName: "juices",
            title: 'СОКИ',
            img: '/-VitaJuice/img/products/products-nav-01.png'
        },
                {
            id: 2,
            categoryName: "mixes",
            title: 'МИКСЫ',
            img: '/-VitaJuice/img/products/products-nav-02.png'
        },
                {
            id: 3,
            categoryName: "smoothie",
            title: 'СМУЗИ',
            img: '/-VitaJuice/img/products/products-nav-03.png'
        },
                {
            id: 4,
            categoryName: "detox",
            title: 'ДЕТОКСЫ',
            img: '/-VitaJuice/img/products/products-nav-04.png'
        },
                {
            id: 5,
            categoryName: "lassi",
            title: 'ЛАССИ',
            img: '/-VitaJuice/img/products/products-nav-05.png'
        },
                {
            id: 6,
            categoryName: "bowls",
            title: 'БОУЛЫ',
            img: '/-VitaJuice/img/products/products-nav-06.png'
        },
                {
            id: 7,
            categoryName: "salads",
            title: 'САЛАТЫ',
            img: '/-VitaJuice/img/products/products-nav-07.png'
        },
                {
            id: 8,
            categoryName: "healthy-food",
            title: 'ЗДОРОВАЯ ЕДА',
            img: '/-VitaJuice/img/products/products-nav-08.png'
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
                                productNav.map(obj => {
                                    let edit = false
                                    if (obj.id === 8) {
                                        edit = true
                                    }
                                    return <ProductsItem edit={edit} item={obj} key={obj.id} />
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
  )
}