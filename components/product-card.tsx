import Image from "next/image"
import Link from "next/link"
import { cn } from "utils/cn"
import { type CurrencyType, mapCurrencyToSign } from "utils/map-currency-to-sign"
import type { CommerceProduct, ProductType } from "types"
import { StarIcon } from "components/icons/star-icon"

 
export const ProductCard = (props: ProductType) => {
 const { name,
  subTitle,
  text,
  currency,
  price,
  img,
  id,}=props

  return (
    <Link className={cn("group flex h-full w-full flex-col overflow-hidden")}  href={`product/${id}`}  >
      <div className="relative aspect-square overflow-hidden">
        <Image
          // priority={priority}
          className="object-cover transition-transform group-hover:scale-105"
          src={img || "/default-product-image.svg"}
          alt={subTitle|| name}
          fill
        />
      </div>
      <div className="flex shrink-0 grow flex-col py-4">
        {/* remove first word from the title as it includes vendor (this just needs feed update and then can be removed) */}
        <h3 className="line-clamp-2 text-lg font-semibold transition-colors">{name.split(" ").slice(1).join(" ")}</h3>
        <div className="flex flex-col gap-1">
            <span>From {`${price}${currency}`}</span>

          {/* {!!vendor && <p className="text-sm text-gray-500">{vendor}</p>} */}
          <div className="mt-1 flex flex-wrap items-center gap-1">
            
              <>
                <div className="flex items-center space-x-1">
                  <StarIcon className="size-4 fill-gray-400 stroke-gray-500" />
                  <span className="text-sm">{4.5}</span>
                  <span className="text-xs">
                    ({8})
                  </span>
                </div>
                •
              </>
          
            
          </div>
        </div>
      </div>
    </Link>
  )
}
