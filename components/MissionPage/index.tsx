import BannerComponent from "components/BannerComponent"
import React from "react"
import { NextSeo } from 'next-seo'

const MissionVision = () => {
  return (
    <>
    <NextSeo
        title="Our Mission - Driving Sustainability with Quality Lubricants | Texas Lube"
        description="Learn about Texas Lube's mission to provide sustainable and high-performance lubricants for the automobile industry, driving efficiency and environmental care."
        canonical="https://www.texaslube.org/our-mission"
        openGraph={{
          url: 'https://www.texaslube.org/our-mission',
          title: 'Our Mission - Driving Sustainability with Quality Lubricants | Texas Lube',
          description: 'Learn about Texas Lube\'s mission to provide sustainable and high-performance lubricants for the automobile industry, driving efficiency and environmental care.',
          images: [
             
          ],
        }}
      />
    <div className="mx-auto max-w-7xl px-6 py-12">
       <h1 className="mb-5 text-center text-xl font-bold text-[#BF2B29] sm:text-[40px] lg:text-center">Mission and Vision</h1>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-[#2E439A]">Driving Excellence and Sustainability</h2>
        <p className="text-base text-gray-600 md:text-lg mb-[20px]">Discover our commitment to quality, innovation, and a sustainable future in the global lubricants industry.</p>
      </div>
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-[#2E439A]">Our Mission</h2>
        <p className="text-base text-gray-600 md:text-lg mb-[20px]">
          At TEXAS LUBE LLC, our mission is to provide top-tier lubricants, greases, and automotive fluids that drive the success of our customers. We are dedicated to delivering
          high-quality products with on-time efficiency, ensuring every order meets or exceeds expectations. Through effective communication and a focus on reliability, we build
          lasting trust with our clients and create seamless, impactful partnerships.
        </p>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-semibold text-[#2E439A]">Our Vision</h2>
        <p className="text-base text-gray-600 md:text-lg mb-[20px]">
          We envision a future where innovation and sustainability power the global lubricants industry. Our goal is to be the foremost provider of lubricants, enhancing the
          performance, reliability, and longevity of vehicles and machinery worldwide. By embracing cutting-edge technology and environmentally conscious practices, we strive to
          not only fuel industry growth but also protect the planet for generations to come.
        </p>
      </div>
    </div>
    </>
  )
}

export default MissionVision
