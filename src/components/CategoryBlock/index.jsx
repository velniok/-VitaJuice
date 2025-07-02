import React from 'react'
import { useParams } from 'react-router'
import productList from '../../ProductList'
import CategoryCatalog from './CategoryCatalog'

export default function CategoryBlock({ addToCart }) {

    let { categoryName } = useParams()

  return (
    <>
        {
            productList.map(obj => {
                if (obj.categoryName === categoryName) {
                    return <CategoryCatalog 
                        key={obj.categoryId}
                        catalog={obj.catalog} 
                        categoryName={obj.name} 
                        addToCart={addToCart}
                        categoryId={obj.categoryId}
                        />
                }
            })
        }
    </>
  )
}
