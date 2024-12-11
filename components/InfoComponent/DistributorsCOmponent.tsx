import Image from "next/image"
import Link from "next/link"

export default function ForDistributors() {
  const distributorsCardsData = [
    {
      title: "🌍  Global Reach ",
      text: "Expand in markets worldwide.",
      img: "/pcl-hub.png",
      url: "/distributors/hub",
    },
    {
      title: "✅  Quality Products ",
      text: `Industry-certified lubricants & fluids.`,
      img: "/ibuy.png",
      url: "/distributors/ibuy",
    },
    {
      title: "💬  Dedicated Support ",
      text: `Reliable customer service at every step. `,
      img: "/dis-calculator.png",
      url: "/distributors/dis-calculator",
    },
    {
      title: "💰  Competitive Pricing ",
      text: `Maximize your profits with our cost-effective solutions.`,
      img: "/sds.png",
      url: "/distributors/sds",
    },
    {
      title: "🔧  Innovative Technology ",
      text: `Access to cutting-edge blending and manufacturing.`,
      img: "/Active-Learner.png",
      url: "/distributors/360-learning",
    },
    {
      title: "📈  Proven Experience ",
      text: `Over 94 years in the oils and lubricants industry.`,
      img: "/image-library.png",
      url: "/distributors/image-library",
    },
  ]

  return (
    <div className="relative bg-white py-16  ">
      {/* Background Truck Image */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image src="/distributor-bg-image.png" alt="Truck Background" layout="fill" objectFit="contain" className="z-0" />
      </div>

      <div className="relative   z-10 mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <h1 className="mb-5 text-center text-xl font-bold text-[#BF2B29] sm:text-[40px] lg:text-left">Become a Distributor</h1>

        <p className="!mb-[100px] mt-4 w-[70%] text-center text-[grey] lg:text-left">
          Partner with us to distribute high-quality lubricants and automotive fluids globally. Join our trusted network and benefit from exceptional support, competitive prices,
          and a proven track record of success. 
        </p>

        <div className="mt-8 grid w-[70%] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {distributorsCardsData.map((data, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* <div className="h-[50px] w-[60px] bg-cover bg-center text-red-500">
                <Image
                  src={data.img} // Replace with the correct image source
                  alt="Truck Background"
                  width={60}
                  height={50}
                  className="object-cover"
                />
              </div> */}

              <div>
                <h3 className="font-bold">{data.title}</h3>
                <p className="text-gray-600">{data.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href={'/contact-us'} className="rounded-lg bg-[#BF2B29] px-8 py-5 font-semibold text-white shadow-lg hover:bg-red-600">Become a Distributor</Link>
        </div>
      </div>
    </div>
  )
}
