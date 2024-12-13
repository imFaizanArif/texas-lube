import BannerComponent from "components/BannerComponent"
import React from "react"

const AboutUs = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-5 text-center text-xl font-bold text-[#BF2B29] sm:text-[40px] lg:text-center">About Us</h1>
      <div className="mb-5">
        <h2 className="mb-4 text-2xl font-semibold text-[#2E439A]">Premium Engine Oils</h2>
        <p className="text-lg">
          Engineered to meet the stringent performance demands of vehicles requiring API SP performance, PRIMUS products offer unparalleled lubrication. Our oils surpass industry
          standards, boasting certifications such as API-SP, API-SN, ILSAC GF-6A, and ILSAC GF-6B, ensuring optimal protection and performance for your engine.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-lg">
          Our headquarters is located at <strong>7250 Harwin Dr, Ste N, Houston, Texas, USA</strong>, strategically positioned in the heart of the petroleum industry. With over 94
          years of family experience in the oils and lubricants sector, we have established ourselves as a leading distributor and blender/packager of high-quality lubricants,
          greases, and automotive fluids.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-[#2E439A]">Our Products</h2>
        <p className="text-lg">From our Houston facility, we oversee the production and distribution of a comprehensive range of products, including:</p>
        <ul className="mt-4 list-inside list-disc text-lg">
          <li>Full Synthetic Motor Oil</li>
          <li>Gear Oil</li>
          <li>Transmission Fluid</li>
          <li>Hydraulic Fluids</li>
          <li>Industrial Oils</li>
          <li>Off Road Lubricants</li>
          <li>2 Cycle Engine Oil</li>
          <li>And much more...</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-[#2E439A]">Quality Commitment</h2>
        <p className="text-lg">We pride ourselves on our commitment to quality, ensuring that all our products meet or exceed industry certifications such as:</p>
        <ul className="mt-4 list-inside list-disc text-lg">
          <li>API</li>
          <li>ACEA</li>
          <li>ISO</li>
          <li>JASO</li>
        </ul>
      </div>
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-[#2E439A]">Key Facts About Our Headquarters</h2>
        <ul className="list-inside list-disc text-lg">
          <li>
            <strong>📍 Location:</strong> 7250 Harwin Dr, Ste N, Houston, Texas, USA
          </li>
          <li>
            <strong>🏭 Industry Expertise:</strong> Over 94 years of family experience in oils and lubricants
          </li>
          <li>
            <strong>🌍 Global Reach:</strong> Serving distributors and customers worldwide
          </li>
          <li>
            <strong>🔬 Innovation:</strong> State-of-the-art blending and manufacturing processes
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <p className="text-lg">We continue to innovate and provide the highest standards in lubricants and fluids from Houston, the petroleum capital of the world.</p>
      </div>
    </div>
  )
}

export default AboutUs
