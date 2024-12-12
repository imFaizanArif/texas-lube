import BannerComponent from "components/BannerComponent"
import React from "react"

const DistributorPage = () => {
  const distributors = [
    { region: "Texas", name: "Multitraders International LLC" },
    { region: "Florida", name: "Rebex Lubricants Inc" },
    { region: "Antigua", name: "United Energy LLC (Dallas)" },
    { region: "Belize", name: "AB Trading LLC (Chicago)" },
    { region: "Costa Rica", name: "AB Trading Inc (Washington DC)" },
    { region: "Dominican Republic", name: "AB Trading Inc (Metropolitan)" },
    { region: "Guatemala", name: "Texas Oil and Greases Inc (Canada)" },
    { region: "Honduras", name: "Texas Lube LLC (United Kingdom)" },
    { region: "Lebanon", name: "GX Oil FZ LLC (United Arab Emirates)" },
    { region: "Libya", name: "Rebex Group (Africa)" },
    { region: "Mexico", name: "United Energy LLC (Algeria)" },
    { region: "Paraguay", name: "Future World Oil (Algeria)" },
    { region: "Peru", name: "Texas Lube (Saudi Arabia)" },
    { region: "Puerto Rico", name: "Texas Lube (Kuwait)" },
    { region: "Trinidad & Tobago", name: "GX Oil (Oman)" },
    { region: "Venezuela", name: "Texas Lube (Qatar)" },
  ]

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <BannerComponent
        title="Our Distributor"
        subtitle="Global Network of Trusted Distributors"
        description="Discover how our trusted partners deliver high-quality lubricants across the globe."
      />
      <h1 className="mb-5 text-center text-xl font-bold text-[#BF2B29] sm:text-[40px] lg:text-center">Our Global Network of Distributors</h1>
      <p className="mb-8 text-lg">
        At TEXAS LUBE LLC, we are proud to work with a wide network of trusted distributors around the world. Our partners play a key role in delivering our high-quality
        lubricants, greases, and automotive fluids to businesses and consumers in various regions. With a global presence spanning across the Americas, the Middle East, Africa, and
        beyond, our distributors are committed to providing reliable, top-notch products that meet industry standards.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {distributors.map((distributor, index) => (
          <div key={index} className="rounded-lg border p-6 shadow">
            <h2 className="mb-2 text-xl font-semibold text-[#2E439A]">{distributor.region}</h2>
            <p className="text-lg">{distributor.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="mb-4 text-2xl font-semibold">Join Our Network</h2>
        <p className="mb-6 text-lg">
          We are always seeking reliable and capable partners to expand our global reach. If you are interested in becoming a distributor or would like to know more about our
          distribution opportunities, please contact us.
        </p>
        <a href="/contact-us" className="rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700">
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default DistributorPage