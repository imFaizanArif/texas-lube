import { Button } from "antd"
import Image from "next/image"
import Link from "next/link"

export function HomeTextImageSection() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 p-6 md:flex-row">
      {/* Left Section */}
      <div className="flex flex-col items-start space-y-4 text-left md:w-1/2">
        <h2 className=" text-center   font-bold text-[#BF2B29] sm:text-[40px] lg:text-center">Our Products & Global Reach</h2>
        <p className="text-base text-gray-600 md:text-lg">
          {" "}
          We offer a comprehensive range of high-quality lubricants, greases, and automotive fluids, including Full Synthetic Motor Oil, Gear Oil, Hydraulic Fluids, and more. All
          our products meet or exceed industry standards, backed by certifications from API, ACEA, ISO, JASO, and others. With a strong global presence, our products are
          distributed worldwide, from North America to the Caribbean, Central America, and the Middle East. Explore our full range of products and see how we can meet your business
          needs.
        </p>
       
        <div className="mt-8 flex justify-center lg:justify-start">
          <Link href={"/about-us"}>
          <Button  className="rounded-lg bg-[#BF2B29] !px-[30px] !py-[22px] font-semibold text-white shadow-lg hover:!bg-red-600 hover:!text-white hover:!border-none"> Click here to learn more.</Button>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center md:w-1/2">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1682148233099-e9de9e59b081?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={"image missing"}
          width={400}
          height={400}
          className="rounded-lg object-cover"
          priority
        />
      </div>
    </div>
  )
}
