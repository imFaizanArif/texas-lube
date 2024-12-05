
"use client"
import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { productsJSONData } from 'constants/productsArray'

const ProductsComponent = () => {
  const [showCategoryProducts, setShowCategoryProducts] = useState<number | undefined>()
  return (

    <div className='max-w-7xl mx-auto px-4 sm:px-8'>
      <h1 className='mb-[24px] text-center text-[34px] font-semibold'>All Products</h1>
      {productsJSONData.map((product, index) => <div key={index}
        onClick={() => setShowCategoryProducts(index === showCategoryProducts ? undefined : index)}
        className='cursor-pointer border rounded-md mb-2 '>
        <div className='flex w-full justify-between items-center p-3 '>

          <h2 className="text-left text-[#BF2B29] text-md sm:text-3xl font-semibold w-[80%]       ">{product.category}</h2>
          <span className='rounded-full w-8 h-8 border bg-[#BF2B29] text-white flex justify-center items-center'>{product.items.length}</span>
        </div>
        {index === showCategoryProducts && (
          <div className='grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 w-full px-3 mx-auto  '>
            {
              product.items.map((item, i) => <ProductCard key={i} {...{ ...item, category: product.category, id: item.id }} />)

            }

          </div>
        )}
      </div>
      )}
    </div>
  )
}

export default ProductsComponent