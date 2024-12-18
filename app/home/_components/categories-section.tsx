"use client"
import { CategoryCard } from "components/category-card"
import { cn } from "utils/cn"
import { getCategories } from "lib/algolia"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "components/ui/carousel"
import { Image as AntDImage, Button } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
export async function CategoriesSection() {
  // const { hits: categories } = await getCategories({
  //   hitsPerPage: 4,
  //   attributesToRetrieve: ["handle"],
  // })
  const categories = [
    {
      image: { altText: "will be given", url: "/product-img.png" },
      title: "TXL Primus Motor Oils",
    },
    {
      image: { altText: "will be given", url: "/product-img.png" },
      title: "TXL Teres Motor Oils",
    },
    {
      image: { altText: "will be given", url: "/product-img.png" },
      title: "TXL Fortis  Heavy-Duty Engine Oils",
    },
    {
      image: { altText: "will be given", url: "/product-img.png" },
      title: "TXL Gravis Gear Oils",
    },
    {
      image: { altText: "will be given", url: "/product-img.png" },
      title: "TXL Optimum Transmission Fluids",
    },
    {
      image: { altText: "will be given", url: "/product-img.png" },
      title: "TXL Durus Off-Road Lubricants",
    },
    {
      image: { altText: "will be given", url: "/product-img.png" },
      title: "TXL Frictio 4T Engine Oils",
    },
    {
      image: { altText: "will be given", url: "/product-img.png" },
      title: "TXL Altum Hydraulic Oils",
    },
    {
      image: { altText: "will be given", url: "/product-img.png" },
      title: "TXL Probus Industrial Oils",
    },
    {
      image: { altText: "will be given", url: "/product-img.png" },
      title: "TXL Duo 2-Cycle Engine Oil",
    },
    {
      image: { altText: "will be given", url: "/product-img.png" },
      title: "TXL Certus Gas Engine Oils",
    },
  ]

  const scrollLeft = () => {
    const scrollableContainer = document.getElementById("scrollable-container")
    if (scrollableContainer) {
      scrollableContainer.scrollBy({
        left: -300, // Adjust the scroll distance
        behavior: "smooth",
      })
    }
  }

  // Function to scroll right
  const scrollRight = () => {
    const scrollableContainer = document.getElementById("scrollable-container")
    if (scrollableContainer) {
      scrollableContainer.scrollBy({
        left: 300, // Adjust the scroll distance
        behavior: "smooth",
      })
    }
  }

  if (categories?.length === 0) return null

  return (
    <div className="mt-5 bg-gray-50 px-4 py-10">
      <div className="m-auto  max-w-container-md px-6 py-12">
        <h2 className="mb-[25px] text-center text-xl font-bold text-[#BF2B29] sm:text-[40px] lg:text-center"> Categories</h2>
 
        <div className="relative flex items-center ">
          {/* Left Scroll Button */}
          <Button icon={<LeftOutlined className="text-white" />} onClick={scrollLeft} className="absolute left-0 z-10 rounded-full !bg-[#BF2B29] " style={{ zIndex: 10 }} />

          <div id="scrollable-container" className="flex gap-2 overflow-x-auto" style={{ position: "relative", display: "flex", alignItems: "center" }}>
            {categories.map((category, index) => (
              <div key={index} className="col-2">
                <CategoryCard index={index + 3} {...category} /> 
              </div>
            ))}
          </div>
          <Button icon={<RightOutlined className="text-white" />} onClick={scrollRight} className="absolute right-0 z-10 rounded-full !bg-[#BF2B29]  " style={{ zIndex: 10 }} />
        </div>
      </div>
    </div>
  )
}
