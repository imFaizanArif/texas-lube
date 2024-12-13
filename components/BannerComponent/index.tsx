interface BannerProps {
  title: string
  subtitle: string
  description: string,
  img:string
}
const BannerComponent = ({ title, subtitle, description,img }) => {
  return (
    <div className="relative h-[300px] w-full bg-cover bg-center text-white mb-5 !rounded-md shadow-md" style={{ backgroundImage: `url(${img})` ,backgroundPosition:"center",
        backgroundRepeat:'no-repeat',backgroundSize:"cover"
    }}>
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 px-6 text-center">
        <h1 className="mb-4 text-2xl lg:text-4xl font-bold">{title}</h1>
        <h2 className="mb-4 text-xl lg:text-2xl font-semibold line-clamp-2">{subtitle}</h2>
        <p className="max-w-3xl text-md lg:text-lg line-clamp-4">{description}</p>
      </div> */}
    </div>
  )
}
export default BannerComponent
