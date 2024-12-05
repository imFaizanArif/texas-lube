import InfoComponent from "components/InfoComponent";
import ProductsComponent from "components/ProductsComponent";





export default async function StaticPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params

  const { slug } = params
  console.log('slug', slug);
  const NotFound = () => (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900">
      <h1 className="text-6xl font-bold text-neutral-800 dark:text-neutral-200">404</h1>
      <p className="mt-4 text-2xl text-neutral-600 dark:text-neutral-500">Page not found</p>
      <p className="mt-2 text-lg text-neutral-500 dark:text-neutral-300">Sorry, we couldn't find the page you're looking for.</p>
      <a className="mt-8 rounded-md bg-neutral-200 px-6 py-2 text-neutral-900 hover:bg-neutral-300 hover:text-neutral-900 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600 dark:hover:text-neutral-200"
        href="/">Go to Homepage</a></div>
  )

  return (
    <div className="relative mx-auto  py-6 md:py-5 xl:px-0">
      {
        slug === 'products' ? <ProductsComponent /> : slug === 'info' ? <InfoComponent /> : (
         <NotFound />
        )
      }

    </div>
  )
}



