import React from 'react'
import ProductCard from './ProductCard'
import { productsJSONData } from 'constants/productsArray'

const ProductsComponent = () => {
  return (

    <div className='max-w-7xl mx-auto'>
      {productsJSONData.map((product, index) => <div key={index} className=' '>
      <h2 className="text-left text-[#BF2B29] text-4xl font-semibold   pt-[50px]">{product.category}</h2>
        <div className='grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 max-w-[80%] lg:max-w-[90%] mx-auto'>
          {
            product.items.map((item, i) => <ProductCard key={i} {...{...item, category:product.category,id:item.id}} />)

          }

        </div>
      </div>
      )}
    </div>
  )
}

export default ProductsComponent