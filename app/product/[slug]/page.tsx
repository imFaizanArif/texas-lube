import { Suspense } from "react"
import { notFound } from "next/navigation"

import { isDemoMode } from "utils/demo-utils"
import { slugToName } from "utils/slug-name"
import { CurrencyType, mapCurrencyToSign } from "utils/map-currency-to-sign"
import { getCombination, getOptionsFromUrl, hasValidOption, removeOptionsFromUrl } from "utils/product-options-utils"

import { Breadcrumbs } from "components/breadcrumbs"

import { BackButton } from "components/back-button"
import { FavoriteMarker } from "app/product/_components/favorite-marker"
import { SimilarProductsSection } from "app/product/_components/similar-products-section"
import { SimilarProductsSectionSkeleton } from "app/product/_components/similar-product-section-skeleton"
import { VariantsSection } from "app/product/_components/variants-section"
import { ProductTitle } from "app/product/_components/product-title"
import { ProductImages } from "app/product/_components/product-images"
import { RightSection } from "app/product/_components/right-section"
import { FaqSection } from "app/product/_components/faq-section"
import { AddToCartButton } from "app/product/_components/add-to-cart-button"
import { ReviewsSection } from "app/product/_components/reviews-section"

import type { CommerceProduct } from "types"

import { generateJsonLd } from "./metadata"
import { getProduct, getProducts } from "lib/algolia"
import { productsJSONData } from "constants/productsArray"
import { getProductWithId } from "utils/getProductAndSimilarProducts"

export const revalidate = 86400
export const dynamic = "force-static"
export const dynamicParams = true

interface ProductProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  if (isDemoMode()) return []

  const { hits } = await getProducts({
    hitsPerPage: 50,
    attributesToRetrieve: ["handle"],
  })

  return hits.map(({ handle }) => ({ slug: handle }))
}
const p = [
  {
    "id": 1,
    "category": "TXL Primus Motor Oils",
    "items": [
      {
        "name": "TXL Primus Elite SAE 0W-16 Full Synthetic Motor Oil",
        "subTitle": "API SP, ILSAC GF-6B",
        "text": ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta velit quis harum aut omnis a quasi odit ipsum aspernatur pariatur ab eligendi officia, fuga, vero deserunt cum qui iure ducimus!
`,
        currency: 'USD',
        price: "",
        "img": "/product-img.png",
        id: 1
      },
    ]
  }]
export default async function Product(props: ProductProps) {
  const params = await props.params;

  const {
    slug
  } = params;
  console.log('slug', slug);
  // const getProductWithId = ({ id }) => {
  //   let items = {}
  //   let found = null
  //   let similarProducts = []
  //   productsJSONData.map((item, index) => {
  //     items[index + 1] = item.items;
  //   })
  //   for (const key in items) {
  //     if (items[key] && items[key].find(item => item.id == id)) {
  //       found = items[key].find(item => item.id == id)
  //       similarProducts = items[key]
  //     }
  //   }
  //   return { found, similarProducts }
  // }
  const { found } = getProductWithId({ id: slug })


  return !found ? <>No product Found with this {slug} id</> : (
    // <>{slug}</>
    <div className="relative mx-auto max-w-container-md px-4 xl:px-0">
      {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd(product, slug)) }}></script> */}
      <div className="mb:pb-8 relative flex w-full items-center justify-center gap-10 py-4 md:pt-12">
        <BackButton className="left-2 mb-8 hidden md:block xl:absolute" />
        <div className="mx-auto w-full max-w-container-sm">
          {/* <Breadcrumbs className="mb-8" items={makeBreadcrumbs(product)} /> */}
        </div>
      </div>
      <main className="mx-auto max-w-container-sm">
        <div className="grid grid-cols-1 gap-4 md:mx-auto md:max-w-screen-xl md:grid-cols-12 md:gap-8">
          <ProductTitle
            className="md:hidden"
            title={found?.name}
            price={found?.price}
            currency={found?.currency}
          />
          <ProductImages images={[found.img, found.img]} />
          <RightSection className="md:col-span-6 md:col-start-8 md:mt-0">
            <ProductTitle
              className="hidden md:col-span-4 md:col-start-9 md:block"
              title={found?.name}
              price={found?.price}
              currency={found?.currency}
            />
            {/* {!hasOnlyOneVariant && <VariantsSection variants={product.variants} handle={product.handle} combination={combination} />} */}
            <p>{found?.text}</p>
            {/* <AddToCartButton className="mt-4" product={product} combination={combination} />
            <FavoriteMarker handle={product.handle} /> */}
            <FaqSection />
          </RightSection>
        </div>
        {/* <Suspense>
          <ReviewsSection avgRating={5} productHandle={handleProduct} productId={slug} slug={slug} summary={"product.reviewsSummary"} />
        </Suspense> */}
        <Suspense fallback={<SimilarProductsSectionSkeleton />}>
          <SimilarProductsSection   slug={slug} />
        </Suspense>
      </main>
    </div>
  )
}


