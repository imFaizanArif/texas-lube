import BannerComponent from "components/BannerComponent"
import React from "react"

const MissionVision = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <BannerComponent
        title="Our Mission and Vision"
        subtitle="Driving Excellence and Sustainability"
        description="Discover our commitment to quality, innovation, and a sustainable future in the global lubricants industry."
      />
      <h1 className="mb-5 text-center text-xl font-bold text-[#BF2B29] sm:text-[40px] lg:text-center">Mission and Vision</h1>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-[#2E439A]">Our Mission</h2>
        <p className="text-lg">
          At TEXAS LUBE LLC, our mission is to provide top-tier lubricants, greases, and automotive fluids that drive the success of our customers. We are dedicated to delivering
          high-quality products with on-time efficiency, ensuring every order meets or exceeds expectations. Through effective communication and a focus on reliability, we build
          lasting trust with our clients and create seamless, impactful partnerships.
        </p>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-semibold text-[#2E439A]">Our Vision</h2>
        <p className="text-lg">
          We envision a future where innovation and sustainability power the global lubricants industry. Our goal is to be the foremost provider of lubricants, enhancing the
          performance, reliability, and longevity of vehicles and machinery worldwide. By embracing cutting-edge technology and environmentally conscious practices, we strive to
          not only fuel industry growth but also protect the planet for generations to come.
        </p>
      </div>
    </div>
  )
}

export default MissionVision
