 
import ProductViewPage from "components/ProductViewPage";





export default async function StaticPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params

  const { slug } = params
  console.log('slug', slug);
  
  return (
    <div className="relative mx-auto  py-12 md:py-24 xl:px-0">
     <ProductViewPage id={slug[2]}/>
    </div>
  )
}



