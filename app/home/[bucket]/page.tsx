import { BUCKETS } from "constants/index"
 
import { CategoriesSection } from "app/home/_components/categories-section"
 
import HeroSlider from "components/carousel"
 
import { HomeTextImageSection } from "../_components/HomeTextImageSection"
import WhoWeAre from "components/WhoWeAre"

export const revalidate = 86400

export const dynamic = "force-static"

export const dynamicParams = true

export default async function Homepage(props: { params: Promise<{ bucket: string }> }) {
  
  return (
    <div className="flex w-full flex-col">
     
      <HeroSlider />
      <CategoriesSection />
      <WhoWeAre />
      <HomeTextImageSection />
    </div>
  )
}
 
export async function generateStaticParams() {
  return BUCKETS.HOME.map((bucket) => ({ bucket }))
}
