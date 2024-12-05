import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "components/ui/carousel"
import { ProductCard } from "components/product-card"
import { getSimilarProducts } from "lib/algolia"
import { getProductWithId } from "utils/getProductAndSimilarProducts"
import { ProductType } from "types"

interface SimilarProductsSectionProps {
  slug: string
  objectID: string
}

export async function SimilarProductsSection({ slug, objectID }: SimilarProductsSectionProps) {
  const items = await getSimilarProducts(slug, objectID)
  const { found, similarProducts } = getProductWithId({ id: slug })


  return (
    <section className="my-10">
      <Carousel opts={{ skipSnaps: true }}>
        <CarouselPrevious className="absolute -left-20 top-[40%] hidden xl:flex" />
        <h2 className="mb-10 text-[26px] font-medium tracking-[-0.78px]">You might also like</h2>

        <CarouselContent>
          {similarProducts.map((product:ProductType, idx) => (
            <CarouselItem className="basis-1/2 md:basis-1/4" key={idx}>
              <ProductCard   {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute -right-20 top-[40%] hidden xl:flex" />
      </Carousel>
    </section>
  )
}
