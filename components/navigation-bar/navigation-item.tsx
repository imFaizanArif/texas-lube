"use client"

import type { MouseEvent } from "react"
import { ChevronIcon } from "components/icons/chevron-icon"
import { NavItem } from "./types"

export function NavigationItem({ singleMenuItem,showMobile }: { singleMenuItem: NavItem,showMobile: boolean}) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (singleMenuItem.submenu && window.innerWidth < 768) {
      e.preventDefault()
    }
  }

  return (
    <div className={`${showMobile?'px-4 py-2 hover:!bg-[#BF2B29] hover:!text-white ':''}`}>

    <a onClick={handleClick} href={singleMenuItem.href || "#"} className={`${showMobile ? 'hover:text-white text-white md:text-white ':''} !text-[18px]  md:!text-[16px] hover:underline `}>
      {singleMenuItem.text}
      {!!singleMenuItem.submenu && (
        <i>
          <ChevronIcon   />
        </i>
      )}
    </a>
      </div>
  )
}
