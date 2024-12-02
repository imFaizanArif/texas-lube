import Image from "next/image"
import Link from "next/link"
import { PlatformCollection } from "lib/shopify/types"
import { cn } from "utils/cn"

interface CategoryCardProps extends Pick<PlatformCollection, "title" | "image"> {
  index: number
  className?: string
}

export const CategoryCard = ({ image, title, index, className }: CategoryCardProps) => {
  // const href = `/category/${handle}`
  return (
    // <Link href={href} className={cn("group relative overflow-hidden rounded-lg transition-all hover:shadow-md", className)} prefetch={false}>
    <div className={cn("  rounded-lg transition-all hover:shadow-md w-[150px] h-[150px] text-center", className)}>
        <Image
          src={image?.url || `/category-placeholder-${index}.png`}
          alt={image?.altText || `${title} category`}
          className="w-[120px] h-[120px]"
          style={{
            objectFit: "contain",
          }}
          fill
        />
        
      
        <h3 className=" text-xl font-semibold text-black group-hover:text-[#BE2C29]">{title}</h3>
      
    </div>
    // </Link>
  )
}
