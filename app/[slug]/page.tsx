import AboutUs from "components/AboutUs"
import BannerComponent from "components/BannerComponent"
import ContactUs from "components/ContactUs"
import DistributorPage from "components/DistributorPage"
import MissionVision from "components/MissionPage"
import ProductsComponent from "components/ProductsComponent"

export default async function StaticPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params

  const { slug } = params
  console.log("slug", slug)
  const NotFound = () => (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900">
      <h1 className="text-6xl font-bold text-neutral-800 dark:text-neutral-200">404</h1>
      <p className="mt-4 text-2xl text-neutral-600 dark:text-neutral-500">Page not found</p>
      <p className="mt-2 text-lg text-neutral-500 dark:text-neutral-300">Sorry, we couldn't find the page you're looking for.</p>
      <a
        className="mt-8 rounded-md bg-neutral-200 px-6 py-2 text-neutral-900 hover:bg-neutral-300 hover:text-neutral-900 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600 dark:hover:text-neutral-200"
        href="/"
      >
        Go to Homepage
      </a>
    </div>
  )

  return (
    <>
      {/* container size : max-w-container-md px-4 */}
      {slug === "products" ? (
        <>
          <BannerComponent
            img={"/product-page.jpg"}
            title=" "
            subtitle=" "
            description={`  `}
          />
          <div className="relative mx-auto pb-12 pt-4 md:py-5 xl:px-0">
            <ProductsComponent />
          </div>
        </>
      ) : slug.trim() === "contact-us" ? (
        <>
          <BannerComponent
            img={"/contact-page.jpg"}
            title=" "
            subtitle=" "
            description={`   `}
          />
          <div className="relative mx-auto pb-12 pt-4 md:py-5 xl:px-0">
            <ContactUs />
          </div>
        </>
      ) : slug.trim() === "our-mission" ? (
        <>
          <BannerComponent
            img={"/mission-page.jpg"}
            title=""
            subtitle=""
            description={`   `}
          />
          <div className="relative mx-auto pb-12 pt-4 md:py-5 xl:px-0">
            <MissionVision />
          </div>
        </>
      ) : slug.trim() === "about-us" ? (
        <>
          <BannerComponent
            img={"/about-page.jpg"}
            title=""
            subtitle=" "
            description={`  `}
          />
          <div className="relative mx-auto pb-12 pt-4 md:py-5 xl:px-0">
            <AboutUs />
          </div>
        </>
      ) : slug.trim() === "our-distributors" ? (
        <>
          <BannerComponent
            img={"/distributors-page.jpg"}
            title=" "
            subtitle=" "
            description={`   `}
          />
          <div className="relative mx-auto pb-12 pt-4 md:py-5 xl:px-0">
            <DistributorPage />
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </>
  )
}
