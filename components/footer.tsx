import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white text-white py-6 border border-top-1">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Left Section: Logo */}
      <div className="mb-4 md:mb-0">
        <Link href="/">
          <Image src={'/API-logo.jpg'} alt="logo" width={250} height={40} />
        </Link>
      </div>

      {/* Center Section: Social Media Links */}
      <div className="flex space-x-6 mb-4 md:mb-0">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookIcon className="text-xl hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="text-xl hover:text-blue-400 transition duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className="text-xl hover:text-pink-400 transition duration-300" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <TwitterIcon className="text-xl hover:text-blue-600 transition duration-300" />
        </a>
      </div>

      {/* Right Section: Page Links */}
      <div className="flex flex-col gap-2 text-gray-800">
        <b className="text-[18px]">Links</b>
        <Link href="/our-mission">
          <span className="hover:text-gray-400 cursor-pointer transition duration-300">Our Mission</span>
        </Link>
        <Link href="/our-distributors">
          <span className="hover:text-gray-400 cursor-pointer transition duration-300">Our Distributors</span>
        </Link>
        <Link href="/contact-us">
          <span className="hover:text-gray-400 cursor-pointer transition duration-300">Contact us </span>
        </Link>
        <Link href="/about-us">
          <span className="hover:text-gray-400 cursor-pointer transition duration-300">About us</span>
        </Link>
      </div>
    </div>
    <div className="text-center mt-[20px] pt-2 border-t">
        <p className="text-sm text-gray-400">
        @2024 Texas Lube Powered by <span className="text-black font-semibold"> BheemSoft.com.pk </span>
        </p>
      </div>
  </footer>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
