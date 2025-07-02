import React from 'react'
import CategoryCatalogItem from './CategoryCatalogItem'

export default function CategoryCatalog({ catalog, categoryName, addToCart, categoryId }) {
    
  return (
    <section className="catalog">
        <h1 className="catalog-title">{categoryName}</h1>
        <div className="catalog-wrapper">
            <div className="container">
                <div className="catalog__card">
                    <ul className="catalog__card-list">
                        {
                            catalog.map(obj => (
                                <CategoryCatalogItem 
                                key={obj.id}
                                item={obj} 
                                addToCart={addToCart}
                                categoryId={categoryId}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
