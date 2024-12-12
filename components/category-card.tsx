import Image from "next/image"
import Link from "next/link"
import { PlatformCollection } from "lib/shopify/types"
import { cn } from "utils/cn"

interface CategoryCardProps extends Pick<PlatformCollection, "title" | "image"> {
  index: number
  className?: string
}

export const CategoryCard = ({ image, title, index,   }: CategoryCardProps) => {
   return (
    <Link href={'/products'}  >
    <div 
    className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg min-w-[200px] shadow-md border"
    >
        <Image
          src={image?.url || `/category-placeholder-${index}.png`}
          alt={image?.altText || `${title} category`}
          width={100}
          height={100}
          className="object-contain"
        />
        
      
        <h3 className="mt-4 text-center text-sm font-bold line-clamp-1  ">{title}</h3>
      
    </div>
    </Link>
  )
}
