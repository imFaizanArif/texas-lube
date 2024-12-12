import { CategoryCard } from "components/category-card"
import { cn } from "utils/cn"
import { getCategories } from "lib/algolia"

export async function CategoriesSection() {
  // const { hits: categories } = await getCategories({
  //   hitsPerPage: 4,
  //   attributesToRetrieve: ["handle"],
  // })
const categories =[
  {
    image:{altText:'will be given',url:'https://plus.unsplash.com/premium_photo-1683121825174-ff1620a5e387?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    title:"TXL Primus Motor Oils"
  },
  {
    image:{altText:'will be given',url:'https://plus.unsplash.com/premium_photo-1683121825174-ff1620a5e387?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    title:"TXL Teres Motor Oils"
  },
  {
    image:{altText:'will be given',url:'https://plus.unsplash.com/premium_photo-1683121825174-ff1620a5e387?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    title:"TXL Fortis  Heavy-Duty Engine Oils"
  },
  {
    image:{altText:'will be given',url:'https://plus.unsplash.com/premium_photo-1683121825174-ff1620a5e387?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    title:"TXL Gravis Gear Oils"
  },
  {
    image:{altText:'will be given',url:'https://plus.unsplash.com/premium_photo-1683121825174-ff1620a5e387?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    title:"TXL Optimum Transmission Fluids"
  },
  {
    image:{altText:'will be given',url:'https://plus.unsplash.com/premium_photo-1683121825174-ff1620a5e387?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    title:"TXL Durus Off-Road Lubricants"
  },
  {
    image:{altText:'will be given',url:'https://plus.unsplash.com/premium_photo-1683121825174-ff1620a5e387?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    title:"TXL Frictio 4T Engine Oils"
  },
  {
    image:{altText:'will be given',url:'https://plus.unsplash.com/premium_photo-1683121825174-ff1620a5e387?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    title:"TXL Altum Hydraulic Oils"
  },
  {
    image:{altText:'will be given',url:'https://plus.unsplash.com/premium_photo-1683121825174-ff1620a5e387?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    title:"TXL Probus Industrial Oils"
  },
  {
    image:{altText:'will be given',url:'https://plus.unsplash.com/premium_photo-1683121825174-ff1620a5e387?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    title:"TXL Duo 2-Cycle Engine Oil"
  },
  {
    image:{altText:'will be given',url:'https://plus.unsplash.com/premium_photo-1683121825174-ff1620a5e387?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    title:"TXL Certus Gas Engine Oils"
  },
]
  if (categories?.length===0) return null

  return (
    <div className="mt-5 bg-gray-50 px-4 py-10">
      <div className="m-auto  max-w-container-md px-6 py-12">
        <h2 className="mb-5 text-center text-xl font-bold text-[#BF2B29] sm:text-[40px] lg:text-center"> Categories</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2">
        {categories.map((category, index) => {
            return (
              <CategoryCard
                key={index}
                 
                index={index + 3}
                {...category}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
