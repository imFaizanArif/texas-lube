import React from "react"
import ContactForm from "./ContactForm"

const ContactUs = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
     
      <h1 className="mb-5 text-center text-xl font-bold text-[#BF2B29] sm:text-[40px] lg:text-center">Contact Us</h1>
      <div className="mb-8">
        <p className="text-lg">
          We’re here to assist you! Whether you have questions about our products, need support, or want to explore partnership opportunities, we are happy to help. Our team is
          committed to providing timely and effective responses to meet your needs.
        </p>
      </div>
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-[#2E439A]">Get in Touch</h2>
        <p className="mb-4 text-lg">Please fill out the form below with your details and any queries you may have. We’ll get back to you as soon as possible.</p>
        <ContactForm />
      </div>
      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-semibold text-[#2E439A]">Our Address</h2>
        <p className="text-lg">7250 Harwin Dr, Ste N, Houston, TX 77063, USA</p>
        <h2 className="mb-4 text-2xl font-semibold text-[#2E439A]">Contact #</h2>
        <p className="text-lg">+1 (281) 827-8250 </p>
      </div>
    </div>
  )
}

export default ContactUs
