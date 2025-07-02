import React, { useEffect, useState } from 'react'
import productList from '../../ProductList'
import CartItem from './CartItem'

export default function CartBlock({ openCart, doAddToCart, categoryId, setCartAmount }) {

    const [items, setItems] = useState([])
    const [ids, setIds] = useState([])
    const [cartSum, setCartSum] = useState(0)

    useEffect(() => {
        showItem()
        setIds(prev => [...prev, doAddToCart])
    }, [doAddToCart])

    const showItem = () => {
        productList.map(obj => {
            if (obj.categoryId === categoryId && categoryId !== 0) {
                obj.catalog.map(obj => {
                    if (obj.id === doAddToCart && obj.id !== 0) {
                        if (ids.some((id) => id === doAddToCart) !== true) {
                            setItems(prev => [...prev, obj])
                            setCartAmount(prev => prev + 1)
                            setCartSum(prev => prev + obj.price)
                        }
                    }
                })
            }
        })
    }

    const delItem = (id) => {
        setItems(prev => prev.filter(obj => obj.id !== id))
        setIds(prev => prev.filter(obj => obj !== id))
        setCartAmount(prev => prev - 1)
        items.map(obj => {
            if (obj.id === id) {
                setCartSum(prev => prev - obj.price)
            }
        })
    }

  return (
    <div className={`cart ${openCart ? "show" : ""}`}>
        <div className="cart-background">
            <div className="cart-content">
                <div className="cart__card">
                    <ul className="cart__card-list">
                        {
                            items.map(obj => (
                                <CartItem item={obj} key={obj.id} delItem={delItem} />
                            ))
                        }
                    </ul>
                </div>
                <div className="cart__sum">
                    <span className="cart__sum-text">СУММА ЗАКАЗА</span>
                    <span className="cart__sum-num">{cartSum}₽</span>
                </div>
            </div>
        </div>
    </div>
  )
}