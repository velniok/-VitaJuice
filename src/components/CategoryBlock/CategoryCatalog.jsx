import React from 'react'
import CategoryCatalogItem from './CategoryCatalogItem'

export default function CategoryCatalog({ catalog, categoryName }) {
    
  return (
    <section className="catalog">
        <h1 className="catalog-title">{categoryName}</h1>
        <div className="catalog-wrapper">
            <div className="container">
                <div className="catalog__card">
                    <ul className="catalog__card-list">
                        {
                            catalog.map(obj => (
                                <CategoryCatalogItem key={obj.id} item={obj} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
