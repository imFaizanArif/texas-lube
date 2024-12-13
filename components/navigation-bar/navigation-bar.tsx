import { Suspense } from "react"
import { ChevronIcon } from "components/icons/chevron-icon"
import dynamic from "next/dynamic"

import { cn } from "utils/cn"
import { Cart } from "./cart"
import { Favorites } from "./favorites"
import { ImageGridItem, NavItem, TextGridItem, TextImageGridItem } from "./types"
import { ImageGridVariant } from "./variants/image-grid"
import { TextGridVariant } from "./variants/text-grid"
import { TextImageGridVariant } from "./variants/text-image-grid"
import { Skeleton } from "components/ui/skeleton"
import { CloseIcon } from "components/icons/close-icon"
import { SearchButton } from "./search-button"
import { NavigationItem } from "./navigation-item"
import Link from "next/link"
import Image from "next/image"
import { Button } from "components/ui/button"

const ProductAddedAlert = dynamic(() => import("app/product/_components/product-added-alert").then((mod) => mod.ProductAddedAlert))

interface NavigationBarProps {
  items: NavItem[]
}
 
export function NavigationBar({ items }: NavigationBarProps) {
  console.log('items', items);
  const menuITems =[
    {text: 'Home', href: '/'},
    {text: 'Products', href: '/products'},
    {text: 'Our Mission', href: '/our-mission'},
    {text: 'About Us', href: '/about-us'},
    {text: 'Our Distributors', href: '/our-distributors'},

  ]
  const itemsMarkup = menuITems.map((singleMenuItem) => (
    <li
    //  className={cn("menu__item", { menu__dropdown: !!singleMenuItem.submenu })} 
     className={`${cn("menu__item" )} `} 
    key={singleMenuItem.text}>
      <NavigationItem showMobile={false} singleMenuItem={singleMenuItem} />

      <div className="submenu megamenu__text w-full border-b border-black shadow-sm">
        {/* <VariantGrid items={singleMenuItem.submenu?.items} variant={singleMenuItem.submenu?.variant} /> */}
        <div className="submenu__inner flex w-full !flex-col gap-4 md:hidden">
          <a className="" href={singleMenuItem.href || "#"}>
            <h4 className="mb-20 text-center text-xl underline">See all {singleMenuItem.text}</h4>
          </a>
        </div>
      </div>
    </li>
  ))
  const itemsMarkupMobile = menuITems.map((singleMenuItem) => (
    <li
    //  className={cn("menu__item", { menu__dropdown: !!singleMenuItem.submenu })} 
     className={`${cn("menu__item" )} `} 
    key={singleMenuItem.text}>
      <NavigationItem showMobile={true} singleMenuItem={singleMenuItem} />

      <div className="submenu megamenu__text w-full border-b border-black shadow-sm">
        {/* <VariantGrid items={singleMenuItem.submenu?.items} variant={singleMenuItem.submenu?.variant} /> */}
        <div className="submenu__inner flex w-full !flex-col gap-4 md:hidden">
          <a className="" href={singleMenuItem.href || "#"}>
            <h4 className="mb-20 text-center text-xl underline">See all {singleMenuItem.text}</h4>
          </a>
        </div>
      </div>
    </li>
  ))

  return (
    <header className="mega-navbar sticky top-0 z-50 mx-auto my-0 flex w-full flex-wrap content-center px-3 items-center justify-between border-b border-black bg-white py-6">
      <div className="flex justify-between px-4 md:mx-auto md:w-full md:max-w-container-md md:px-0">
        <Link prefetch={false} href="/" className="brand mr-20 hidden items-center text-xl font-bold md:flex">
          <Image src={'/logo.webp'} alt="logo" width={260} height={40} />
        </Link>

        <section className="navbar__left flex w-full justify-between md:hidden">
          <button className="burger" id="burger" aria-label="open menu" aria-controls="menu">
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        
          <div className="menu-actions absolute right-4 flex items-center justify-center gap-2 h-[20px]">
          <Link prefetch={false} href="/" className="brand flex items-center text-xl font-bold">
            {/* Texas Lube */}
          <Image src={'/logo.webp'} alt="logo" width={100} height={70} />

          </Link>
          </div>
         </section>
        <section className="navbar__center w-full md:justify-between">
          {/* <span className="overlay"></span> */}
          <div className="menu bg-[#000000cc] md:bg-white w-full" id="menu">
            <div className="menu__header">
              <span className="menu__arrow">
                <i className="rotate-90">
                  <ChevronIcon />
                </i>
              </span>
              <span className="menu__title"></span>
            </div>
            <div className="menu__inner flex w-full !justify-between">
              <ul className="mt-10  w-full  gap-4 lg:gap-8 px-4 md:mt-0 md:w-auto hidden md:flex md:items-center md:justify-between xl:px-0">{itemsMarkup}
              
              </ul>
              {/* mobile */}
              <ul className="mt-10 flex w-full flex-col gap-4 lg:gap-8   md:mt-0 md:w-auto md:hidden flex flex-col md:items-center md:justify-start  ">{itemsMarkupMobile}
              <Link className="flex md:hidden px-[10%]" href={"/contact-us"}>
                  <Button size="lg" role="link" className="transition-transform bg-transparent border border-white hover:bg-blue-600 text-[18px]">
                    Contact Us
                  </Button>
                  </Link>
              </ul>
               
              <div className="relative ml-auto flex items-center">
                <button className="menu-close-button absolute right-3 top-0 bg-transparent md:hidden bg-white rounded-full p-1" aria-label="close menu" aria-controls="menu">
                  <CloseIcon className="size-5" />
                </button>
                {/* <Autocomplete className="mr-6" /> */}
                <div className="hidden md:flex gap-2  ">
                <Link href={"/contact-us"}>
                  <Button size="lg" role="link" className="transition-transform">
                    Contact Us
                  </Button>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  )
}
