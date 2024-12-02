import { BUCKETS } from "constants/index"
import { AnnouncementBar } from "app/home/_components/announcement-bar"
import { HeroSection } from "app/home/_components/hero-section"
import { CategoriesSection } from "app/home/_components/categories-section"
import { FeaturedProductsSection } from "app/home/_components/featured-products-section"
import { getFeaturedProducts } from "lib/algolia"
import HeroSlider from "components/carousel"
import AboutUs from "components/about"
import Image from "next/image"
import { HomeTextImageSection } from "../_components/HomeTextImageSection"

export const revalidate = 86400

export const dynamic = "force-static"

export const dynamicParams = true

export default async function Homepage(props: { params: Promise<{ bucket: string }> }) {
  const params = await props.params;

  const {
    bucket
  } = params;

  const heroTitles = {
    a: "Discover Your Next Favorite Thing",
    b: "Shop the best Deals on Top Brands & Unique Finds",
  }

  // const results = await getFeaturedProducts()

  return (
    <div className="flex w-full flex-col">
     
      <HeroSlider />
      <CategoriesSection />
      <AboutUs />
      <HomeTextImageSection />
    </div>
  )
}
 
export async function generateStaticParams() {
  return BUCKETS.HOME.map((bucket) => ({ bucket }))
}
