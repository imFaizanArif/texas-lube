import { Suspense } from "react"
import { BackButton } from "components/back-button"
import { SimilarProductsSection } from "app/product/_components/similar-products-section"
import { SimilarProductsSectionSkeleton } from "app/product/_components/similar-product-section-skeleton"
import { ProductTitle } from "app/product/_components/product-title"
import { ProductImages } from "app/product/_components/product-images"
import { RightSection } from "app/product/_components/right-section"
import { FaqSection } from "app/product/_components/faq-section"
import { getProductWithId } from "utils/getProductAndSimilarProducts"

export const revalidate = 86400
export const dynamic = "force-static"
export const dynamicParams = true

interface ProductProps {
 id:string 
}
 
export default async function ProductViewPage(props: ProductProps) {

  const {
    id
  } = props;
  console.log('slug', id);
  
  const { found } = getProductWithId({ id: id })


  return !found ? <>No product Found with this {id} id</> : (
    <div className="relative mx-auto max-w-container-md px-4 xl:px-0">
      <div className="mb:pb-8 relative flex w-full items-center justify-center gap-10 py-4 md:pt-12">
        {/* <BackButton className="left-2 mb-8 hidden md:block xl:absolute" /> */}
        <div className="mx-auto w-full max-w-container-sm">
        </div>
      </div>
      <main className="mx-auto max-w-container-sm">
        <div className="grid grid-cols-1 gap-4 md:mx-auto md:max-w-screen-xl md:grid-cols-12 md:gap-8">
          <ProductTitle
            className="md:hidden"
            title={found?.name}
            price={found?.subTitle}
            currency={""}
          />
          <ProductImages images={[found.img,]} />
          <RightSection className="md:col-span-6 md:col-start-8 md:mt-0">
            <ProductTitle
              className="hidden md:col-span-4 md:col-start-9 md:block"
              title={found?.name}
              price={found?.subTitle}
              currency={""}
            />
            <p>{found?.text}</p>
          
            {/* <FaqSection /> */}
          </RightSection>
        </div>
        
        <Suspense fallback={<SimilarProductsSectionSkeleton />}>
          <SimilarProductsSection  slug={id} />
        </Suspense>
      </main>
    </div>
  )
}


