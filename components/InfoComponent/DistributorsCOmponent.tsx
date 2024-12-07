
import Image from "next/image"

export default function ForDistributors() {
    const distributorsCardsData = [
      {
        title: "HUB",
        text: "Get information to build capability and accelerate sales growth, all in one place",
        img: "/pcl-hub.png",
        url: "/distributors/hub",
      },
      {
        title: "iBuy",
        text: `Order online easily and securely 
                     24 hours a day, 7 days a week`,
        img: "/ibuy.png",
        url: "/distributors/ibuy",
      },
      {
        title: "Calculators",
        text: `Calculate your cost savings `,
        img: "/dis-calculator.png",
        url: "/distributors/dis-calculator",
      },
      {
        title: "SDS",
        text: `Access the Safety Data Sheet information you need`,
        img: "/sds.png",
        url: "/distributors/sds",
      },
      {
        title: "360 Learning",
        text: `Gain lubricant knowledge to sell products and support your customers`,
        img: "/Active-Learner.png",
        url: "/distributors/360-learning",
      },
      {
        title: "Image Library",
        text: `Find quality images to drive your media content `,
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
          <h1 className="text-center mb-5 text-xl font-bold text-[#BF2B29] sm:text-[40px] lg:text-left">For Distributors</h1>

          <p className="!mb-[100px] mt-4 w-[70%] text-center text-[grey] lg:text-left">
            Grow your business with best practice advice and tools to help you deliver innovative solutions and outstanding value to your customers, only for Authorized Distributors.
          </p>
  
          <div className="mt-8 grid w-[70%] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {distributorsCardsData.map((data, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="h-[50px] w-[60px] bg-cover bg-center text-red-500">
                  <Image
                    src={data.img} // Replace with the correct image source
                    alt="Truck Background"
                    width={60}
                    height={50}
                    className="object-cover"
                  />
                </div>
  
                <div>
                  <h3 className="font-bold">{data.title}</h3>
                  <p className="text-gray-600">{data.text}</p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-8">
            <button className="rounded-lg bg-[#BF2B29] px-8 py-5 font-semibold text-white shadow-lg hover:bg-red-600">Become a Distributor</button>
          </div>
        </div>
      </div>
    )
  }
  