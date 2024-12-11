interface BannerProps {
  title: string
  subtitle: string
  description: string
}
const BannerComponent = ({ title, subtitle, description }) => {
  return (
    <div className="relative h-96 w-full bg-cover bg-center text-white mb-5 !rounded-md shadow-md" style={{ backgroundImage: "url(/logo.webp)" ,backgroundPosition:"center",
        backgroundRepeat:'no-repeat',backgroundSize:"cover"
    }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 px-6 text-center">
        <h1 className="mb-4 text-4xl font-bold">{title}</h1>
        <h2 className="mb-4 text-2xl font-semibold">{subtitle}</h2>
        <p className="max-w-3xl text-lg">{description}</p>
      </div>
    </div>
  )
}
export default BannerComponent
