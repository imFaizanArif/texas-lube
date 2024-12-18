"use client"
import React, { useState } from "react"
import ProductCard from "./ProductCard"
import { productsJSONData } from "constants/productsArray"
import Image from "next/image"
import type { CollapseProps } from "antd"
import { Collapse } from "antd"
 
const ProductsComponent = () => {
  // {
  //   key: '1',
  //   label: 'This is panel header 1',
  //   children: <p>{text}</p>,
  // },
  const [showCategoryProducts, setShowCategoryProducts] = useState<number | undefined>()
  const LabelComp = ({ index, category, length,setShowCategoryProducts }) => (
    <div onClick={()=>setShowCategoryProducts(index === showCategoryProducts ? undefined : index)} className="flex w-full items-center justify-between p-3 ">
      <h2 className="text-md w-[80%] text-left font-semibold text-[#BF2B29] sm:text-3xl ">{category}</h2>
      <div className="flex items-center gap-3">
        {index === showCategoryProducts ? (
          <Image src={"/chevron-down.svg"} alt="Product Image" width={20} height={20} className="scale-x-[-1] transform object-contain	" />
        ) : (
          <Image src={"/chevron-up.svg"} alt="Product Image" width={20} height={20} className="scale-x-[-1] transform object-contain	" />
        )}

        <span className="flex h-8 w-8 items-center justify-center rounded-full border bg-[#BF2B29] text-white">{length}</span>
      </div>
    </div>
  )
  const items: CollapseProps["items"] = productsJSONData.map((product, index) => ({
    label: <LabelComp {...{ index, category: product.category, length: product.items.length,setShowCategoryProducts }} />,
    key: index,
    showArrow: false,
    children: (
      <div className="mx-auto  grid w-full px-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  ">
        {product.items.map((item, index) => (
          <ProductCard key={index} {...{ ...item, category: product.category, id: item.id }} />
        ))}
      </div>
    ),
  }))

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8">
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-[#2E439A]">High Quality Products</h2>
        <p className="text-base text-gray-600 md:text-lg mb-[20px]">
          At Texas LUBE LLC, we offer an extensive range of products designed to meet the diverse needs of industries worldwide. From Full Synthetic Motor Oils to Hydraulic Fluids
          and Off-Road Lubricants, our products are crafted to enhance performance, efficiency, and longevity. All of our offerings adhere to the highest industry standards,
          ensuring you get the best quality for your needs. Explore our full product range to find the perfect solution for your business and experience the reliability that has
          made us a trusted name in lubricants and automotive fluids.
        </p>
      </div>

      <h1 className="mb-[24px] text-center text-[34px] font-semibold">All Products</h1>
      <Collapse accordion items={items} />
      {/* {productsJSONData.map((product, index) => (
        <div key={index} onClick={() => setShowCategoryProducts(index === showCategoryProducts ? undefined : index)} className="mb-2 cursor-pointer rounded-md border ">
          <div className="flex w-full items-center justify-between p-3 ">
            <h2 className="text-md w-[80%] text-left font-semibold text-[#BF2B29] sm:text-3xl ">{product.category}</h2>
            <div className="flex items-center gap-3">
              {index === showCategoryProducts ? (
                <Image src={"/chevron-down.svg"} alt="Product Image" width={20} height={20} className="scale-x-[-1] transform object-contain	" />
              ) : (
                <Image src={"/chevron-up.svg"} alt="Product Image" width={20} height={20} className="scale-x-[-1] transform object-contain	" />
              )}

              <span className="flex h-8 w-8 items-center justify-center rounded-full border bg-[#BF2B29] text-white">{product.items.length}</span>
            </div>
          </div>
          {index === showCategoryProducts && (
            <div className="mx-auto  grid w-full px-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  ">
              {product.items.map((item, i) => (
                <ProductCard key={i} {...{ ...item, category: product.category, id: item.id }} />
              ))}
            </div>
          )}
        </div>
      ))} */}
    </div>
  )
}

export default ProductsComponent

