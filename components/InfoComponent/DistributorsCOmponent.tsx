import { Button } from "antd"
import Image from "next/image"
import Link from "next/link"

export default function ForDistributors() {
  const distributorsCardsData = [
    {
      title: "Global Reach ",
      text: "Expand in markets worldwide.",
      img: "/pcl-hub.png",
      url: "/distributors/hub",
    },
    {
      title: "Quality Products ",
      text: `Industry-certified lubricants & fluids.`,
      img: "/ibuy.png",
      url: "/distributors/ibuy",
    },
    {
      title: "Dedicated Support ",
      text: `Reliable customer service at every step. `,
      img: "/dis-calculator.png",
      url: "/distributors/dis-calculator",
    },
    {
      title: "Competitive Pricing ",
      text: `Maximize your profits with our cost-effective solutions.`,
      img: "/sds.png",
      url: "/distributors/sds",
    },
    {
      title: "Innovative Technology ",
      text: `Access to cutting-edge blending and manufacturing.`,
      img: "/Active-Learner.png",
      url: "/distributors/360-learning",
    },
    {
      title: "Proven Experience ",
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

        <p className="mb-[50px] text-base text-gray-600 md:text-lg lg:mb-[50px] lg:w-[70%] lg:text-left">
          Partner with us to distribute high-quality lubricants and automotive fluids globally. Join our trusted network and benefit from exceptional support, competitive prices,
          and a proven track record of success.
        </p>

        <div className="mt-8 grid  w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:w-[70%] lg:grid-cols-3">
          {distributorsCardsData.map((data, index) => (
            // <div key={index} className="flex items-center md:items-start">
            //   <div>
            //     <h3 className="font-bold">{data.title}</h3>
            //     <p className="text-gray-600">{data.text}</p>
            //   </div>
            // </div>
            <div key={index} className="rounded-lg border p-6 shadow">
              <h2 className="line mb-2 text-[16px] font-semibold text-[#2E439A]">{data.title}</h2>
              <p className="text-md line-clamp-2 text-base text-gray-600">{data.text}</p>
            </div>
          ))}
        </div>

        <div className="flex md:hidden mt-[20px]">
          <img src="/distributor-bg-image.png" className="h-[250px] w-full" />
        </div>

        <div className="mt-8 flex justify-center lg:justify-start">
          <Link href={"/contact-us"}>
            <Button className="rounded-lg bg-[#BF2B29] !px-[30px] !py-[22px] font-semibold text-white shadow-lg hover:!border-none hover:!bg-red-600 hover:!text-white">
              Become a Distributor
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
